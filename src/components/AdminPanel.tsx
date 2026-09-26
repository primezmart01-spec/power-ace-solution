import React, { useState, useRef } from 'react';
import { ProjectItem } from '../types';
import { IMAGES } from '../data/siteData';
import {
  saveProjects,
  resetProjectsToDefault,
  setAdminAuthenticated,
} from '../services/projectService';
import {
  Plus,
  Edit2,
  Trash2,
  Check,
  X,
  Search,
  RotateCcw,
  LogOut,
  FolderKanban,
  MapPin,
  Zap,
  Image as ImageIcon,
  Upload,
  Sun,
  Home,
  Building2,
  ShieldCheck,
  Layers,
  FileCheck,
  SlidersHorizontal,
} from 'lucide-react';

interface AdminPanelProps {
  projects: ProjectItem[];
  isOpen: boolean;
  onClose: () => void;
  onProjectsUpdated: (newProjects: ProjectItem[]) => void;
}

export const CATEGORIES_CONFIG = [
  {
    id: 'SOLAR' as const,
    label: 'Solar Systems',
    shortLabel: 'Solar',
    defaultService: 'Solar Energy & Net Metering',
    defaultCapacity: '10 kW Hybrid',
    icon: Sun,
    description: 'On-grid, hybrid, and elevated rooftop arrays',
    colorClasses: 'bg-orange-50 text-[#FF6600] border-orange-200',
    btnColor: 'bg-[#FF6600] hover:bg-[#E65C00] text-white',
  },
  {
    id: 'RESIDENTIAL' as const,
    label: 'Residential',
    shortLabel: 'Residential',
    defaultService: 'Residential Solar & Backup',
    defaultCapacity: '15 kW Hybrid',
    icon: Home,
    description: '5 Marla, 10 Marla, and 1 Kanal homes & villas',
    colorClasses: 'bg-blue-50 text-blue-600 border-blue-200',
    btnColor: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  {
    id: 'COMMERCIAL' as const,
    label: 'Commercial',
    shortLabel: 'Commercial',
    defaultService: 'Commercial On-Grid & Peak Shaving',
    defaultCapacity: '40 kW On-Grid',
    icon: Building2,
    description: 'Plazas, corporate offices, clinics & warehouses',
    colorClasses: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    btnColor: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  },
  {
    id: 'ELECTRICAL' as const,
    label: 'Electrical & UPS',
    shortLabel: 'Electrical',
    defaultService: 'UPS & Lithium Energy Storage',
    defaultCapacity: '10 kVA Pure Sine Wave',
    icon: Zap,
    description: 'Three-phase distribution, earthing & online UPS',
    colorClasses: 'bg-amber-50 text-amber-700 border-amber-200',
    btnColor: 'bg-amber-600 hover:bg-amber-700 text-white',
  },
  {
    id: 'SECURITY' as const,
    label: 'Security & CCTV',
    shortLabel: 'Security',
    defaultService: 'CCTV & Perimeter Surveillance',
    defaultCapacity: '16-Channel 4K IP Array',
    icon: ShieldCheck,
    description: 'Solar/UPS-tied 24/7 surveillance arrays',
    colorClasses: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    btnColor: 'bg-emerald-600 hover:bg-emerald-700 text-white',
  },
];

export const AdminPanel: React.FC<AdminPanelProps> = ({
  projects,
  isOpen,
  onClose,
  onProjectsUpdated,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isAddMode, setIsAddMode] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [imageUploadSource, setImageUploadSource] = useState<'upload' | 'preset'>('upload');
  const [uploadError, setUploadError] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form state for Add/Edit
  const [formData, setFormData] = useState<Partial<ProjectItem>>({
    title: '',
    category: 'SOLAR',
    service: 'Solar & Hybrid Backup',
    location: 'Islamabad',
    capacity: '10 kW Hybrid',
    label: 'Featured Capability',
    description: '',
    highlights: [],
    imageUrl: IMAGES.heroArchitecture,
    systemDetails: {
      panels: 'Tier-1 Monocrystalline Bifacial',
      inverter: '10 kW Hybrid Inverter',
      battery: '10 kWh LiFePO4 Battery Bank',
      monitoring: 'Wi-Fi Cloud Telemetry Portal',
    },
  });

  const [highlightsInput, setHighlightsInput] = useState('');

  if (!isOpen) return null;

  const handleLogout = () => {
    setAdminAuthenticated(false);
    onClose();
  };

  const handleResetData = () => {
    if (window.confirm('Are you sure you want to reset all projects to default verified installations?')) {
      const def = resetProjectsToDefault();
      onProjectsUpdated(def);
    }
  };

  const handleDelete = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    saveProjects(updated);
    onProjectsUpdated(updated);
    setDeleteConfirmId(null);
  };

  // Open add modal with a specific category preselected
  const handleStartAddCategory = (catId: 'SOLAR' | 'RESIDENTIAL' | 'COMMERCIAL' | 'ELECTRICAL' | 'SECURITY') => {
    const config = CATEGORIES_CONFIG.find((c) => c.id === catId);
    setIsAddMode(true);
    setEditingProject(null);
    setUploadError('');
    setImageUploadSource('upload');
    setFormData({
      id: `proj-${Date.now()}`,
      title: '',
      category: catId,
      service: config?.defaultService || 'Solar Energy',
      location: 'Islamabad',
      capacity: config?.defaultCapacity || '10 kW Hybrid',
      label: 'Featured Capability',
      description: '',
      imageUrl: IMAGES.heroArchitecture,
      systemDetails: {
        panels: catId === 'SECURITY' ? 'N/A' : '585W Monocrystalline Bifacial Tier-1',
        inverter: catId === 'ELECTRICAL' ? '10 kVA Pure Sine Wave Inverter' : '10 kW Three-Phase Hybrid Inverter',
        battery: catId === 'COMMERCIAL' ? 'N/A (Daytime Grid-Tied)' : '10.2 kWh LiFePO4 Battery Bank',
        monitoring: 'Wi-Fi Cloud Portal & Mobile App',
      },
    });
    setHighlightsInput('Precision engineered deployment by Power Ace Solutions\nHigh-durability structural mounting & weather sealing\nComprehensive commissioning and testing');
  };

  const handleStartEdit = (proj: ProjectItem) => {
    setEditingProject(proj);
    setIsAddMode(false);
    setUploadError('');
    setImageUploadSource(proj.imageUrl.startsWith('data:') ? 'upload' : 'preset');
    setFormData(JSON.parse(JSON.stringify(proj)));
    setHighlightsInput(proj.highlights ? proj.highlights.join('\n') : '');
  };

  // Handle local image file upload from computer
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit: max 10MB before resizing
    if (file.size > 10 * 1024 * 1024) {
      setUploadError('File is too large. Please select an image under 10MB.');
      return;
    }

    setUploadError('');

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        // Resize to maximum 1200px to maintain crisp photography while staying within storage limits
        const maxDimension = 1200;
        let width = img.width;
        let height = img.height;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.86);
          setFormData((prev) => ({ ...prev, imageUrl: dataUrl }));
        }
      };
      img.onerror = () => {
        setUploadError('Failed to process image file. Please try another format.');
      };
      img.src = event.target?.result as string;
    };
    reader.onerror = () => {
      setUploadError('Failed to read file from computer.');
    };
    reader.readAsDataURL(file);
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title?.trim() || !formData.location?.trim()) {
      alert('Please fill out the Project Title and Location');
      return;
    }

    const parsedHighlights = highlightsInput
      .split('\n')
      .map((h) => h.trim())
      .filter(Boolean);

    const projectToSave: ProjectItem = {
      id: formData.id || `proj-${Date.now()}`,
      title: formData.title || 'Untitled Project',
      category: (formData.category || 'SOLAR') as any,
      service: formData.service || 'Solar Energy',
      location: formData.location || 'Islamabad',
      capacity: formData.capacity,
      label: formData.label || 'Featured Capability',
      description: formData.description || 'Custom engineered power installation.',
      highlights: parsedHighlights.length > 0 ? parsedHighlights : ['Precision engineered installation'],
      imageUrl: formData.imageUrl || IMAGES.heroArchitecture,
      systemDetails: formData.systemDetails || {},
      createdAt: formData.createdAt || new Date().toISOString(),
    };

    let updatedList: ProjectItem[];
    if (editingProject) {
      updatedList = projects.map((p) => (p.id === editingProject.id ? projectToSave : p));
    } else {
      updatedList = [projectToSave, ...projects];
    }

    saveProjects(updatedList);
    onProjectsUpdated(updatedList);
    setEditingProject(null);
    setIsAddMode(false);
  };

  const filtered = projects.filter((p) => {
    const matchCat = filterCategory === 'ALL' || p.category === filterCategory;
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.service.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0F1E36]/75 backdrop-blur-md">
      <div className="bg-white max-w-5xl w-full rounded-2xl border border-slate-200 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden text-[#0F1E36]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F1E36] text-white flex items-center justify-center">
              <FolderKanban className="w-5 h-5 text-[#FF6600]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-display font-bold text-[#0F1E36]">
                  Project Management Console
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-100 text-[#FF6600] font-bold">
                  Admin Verified
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Manage live project listings shown across Power Ace Solutions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetData}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors text-xs flex items-center gap-1"
              title="Reset to default verified projects"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset Defaults</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-red-50 hover:text-red-600 text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-grow space-y-6">
          {/* SECTION 1: ALL CATEGORIES DIRECTORY & QUICK ADD */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-display font-bold text-[#0F1E36] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#FF6600]" />
                  <span>Categories Directory</span>
                </h3>
                <p className="text-[11px] text-slate-500">
                  Select a category to view listings or add a new project directly into that category
                </p>
              </div>

              <button
                onClick={() => handleStartAddCategory('SOLAR')}
                className="px-3.5 py-1.5 rounded-xl bg-[#FF6600] hover:bg-[#E65C00] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Project</span>
              </button>
            </div>

            {/* Visual Category Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {CATEGORIES_CONFIG.map((cat) => {
                const count = projects.filter((p) => p.category === cat.id).length;
                const IconComponent = cat.icon;
                const isSelected = filterCategory === cat.id;

                return (
                  <div
                    key={cat.id}
                    className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#FF6600] bg-orange-50/40 ring-1 ring-[#FF6600]'
                        : 'border-slate-200 bg-slate-50/70 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-1.5 rounded-lg border ${cat.colorClasses}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#0F1E36] bg-white px-2 py-0.5 rounded-md border border-slate-200">
                          {count} {count === 1 ? 'Site' : 'Sites'}
                        </span>
                      </div>

                      <h4 className="font-bold text-xs text-[#0F1E36]">{cat.label}</h4>
                      <p className="text-[10px] text-slate-500 line-clamp-2 mt-0.5 mb-3 leading-tight">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between gap-1">
                      <button
                        onClick={() => setFilterCategory(isSelected ? 'ALL' : cat.id)}
                        className={`text-[10px] font-semibold px-2 py-1 rounded-md transition-colors ${
                          isSelected
                            ? 'bg-slate-200 text-slate-800'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                        }`}
                      >
                        {isSelected ? 'Clear Filter' : 'Filter View'}
                      </button>

                      <button
                        onClick={() => handleStartAddCategory(cat.id)}
                        className={`text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 transition-all ${cat.btnColor} shadow-xs`}
                        title={`Add new ${cat.label} project`}
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: SEARCH & FILTER CONTROLS */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 flex-grow max-w-md">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search projects by title, sector, service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:outline-none focus:border-[#FF6600]"
                />
              </div>

              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:bg-white focus:outline-none focus:border-[#FF6600] shrink-0"
              >
                <option value="ALL">All Categories ({projects.length})</option>
                {CATEGORIES_CONFIG.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label} ({projects.filter((p) => p.category === cat.id).length})
                  </option>
                ))}
              </select>
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-[#0F1E36]">{filtered.length}</span> of{' '}
              <span className="font-bold text-[#0F1E36]">{projects.length}</span> projects
            </div>
          </div>

          {/* SECTION 3: PROJECTS TABLE */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100/75 border-b border-slate-200 text-slate-600 uppercase font-semibold">
                <tr>
                  <th className="py-3 px-4">Project & Media</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Capacity</th>
                  <th className="py-3 px-4">Label</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((proj) => (
                  <tr key={proj.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={proj.imageUrl}
                          alt=""
                          className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0 bg-slate-100"
                        />
                        <div>
                          <p className="font-bold text-slate-900">{proj.title}</p>
                          <p className="text-[11px] text-slate-500">{proj.service}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-slate-100 font-mono text-[10px] font-semibold text-slate-700">
                        {proj.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#FF6600]" />
                        {proj.location}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono font-medium text-slate-800">
                      {proj.capacity || '—'}
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-50 text-[#FF6600] border border-orange-200">
                        {proj.label}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleStartEdit(proj)}
                          className="p-1.5 rounded-md hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                          title="Edit project"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>

                        {deleteConfirmId === proj.id ? (
                          <div className="flex items-center gap-1 bg-red-50 p-1 rounded-md border border-red-200">
                            <span className="text-[10px] text-red-600 font-bold px-1">Confirm?</span>
                            <button
                              onClick={() => handleDelete(proj.id)}
                              className="p-1 rounded bg-red-600 text-white hover:bg-red-700"
                            >
                              <Check className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => setDeleteConfirmId(null)}
                              className="p-1 rounded bg-slate-200 text-slate-700"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirmId(proj.id)}
                            className="p-1.5 rounded-md hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                            title="Delete project"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filtered.length === 0 && (
              <div className="p-8 text-center text-slate-500 text-xs">
                No projects matched your search criteria.
              </div>
            )}
          </div>
        </div>

        {/* ADD / EDIT PROJECT MODAL OVERLAY */}
        {(isAddMode || editingProject) && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-[#0F1E36]/80 backdrop-blur-sm">
            <div className="bg-white max-w-2xl w-full rounded-2xl p-6 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => {
                  setIsAddMode(false);
                  setEditingProject(null);
                }}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-xl font-display font-bold text-[#0F1E36] mb-1">
                {isAddMode ? 'Add New Project' : 'Edit Project Details'}
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Upload photos directly from your computer or pick presets. Saved projects publish live immediately.
              </p>

              <form onSubmit={handleSaveForm} className="space-y-4 text-xs">
                {/* 1. Category Selection Tabs (Show all categories to pick from) */}
                <div>
                  <label className="block font-semibold text-slate-700 mb-1.5">
                    Select Project Category *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {CATEGORIES_CONFIG.map((cat) => {
                      const IconComp = cat.icon;
                      const isCatSelected = formData.category === cat.id;

                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              category: cat.id,
                              service: formData.service || cat.defaultService,
                              capacity: formData.capacity || cat.defaultCapacity,
                            });
                          }}
                          className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                            isCatSelected
                              ? 'border-[#FF6600] bg-orange-50/80 font-bold text-[#FF6600] shadow-xs ring-1 ring-[#FF6600]'
                              : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600'
                          }`}
                        >
                          <IconComp className="w-4 h-4" />
                          <span className="text-[11px] leading-tight">{cat.shortLabel}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. 15 kW Hybrid Solar Installation"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#FF6600]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Service Type *</label>
                    <input
                      type="text"
                      required
                      value={formData.service || ''}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      placeholder="e.g. Solar Energy & Net Metering"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#FF6600]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Capacity / System Spec</label>
                    <input
                      type="text"
                      value={formData.capacity || ''}
                      onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                      placeholder="e.g. 15 kW Hybrid / 40 kW On-Grid"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#FF6600]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Location *</label>
                    <input
                      type="text"
                      required
                      value={formData.location || ''}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. DHA Phase 2, Islamabad / Bahria Town"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#FF6600]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Badge Label</label>
                    <input
                      type="text"
                      value={formData.label || ''}
                      onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                      placeholder="e.g. Featured Capability / Completed Site"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#FF6600]"
                    />
                  </div>
                </div>

                {/* 2. Manual Image Upload from Computer Section */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-[#FF6600]" />
                      <span>Project Image Selection</span>
                    </span>

                    <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200">
                      <button
                        type="button"
                        onClick={() => setImageUploadSource('upload')}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                          imageUploadSource === 'upload'
                            ? 'bg-[#FF6600] text-white'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Upload from Computer
                      </button>
                      <button
                        type="button"
                        onClick={() => setImageUploadSource('preset')}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                          imageUploadSource === 'preset'
                            ? 'bg-[#FF6600] text-white'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Select Library Preset
                      </button>
                    </div>
                  </div>

                  {uploadError && (
                    <p className="text-[11px] text-red-600 font-medium bg-red-50 p-2 rounded-lg border border-red-200">
                      {uploadError}
                    </p>
                  )}

                  {imageUploadSource === 'upload' ? (
                    <div className="space-y-3">
                      {/* Hidden File Input */}
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/png, image/jpeg, image/jpg, image/webp"
                        className="hidden"
                      />

                      {/* Drop / Browse Area */}
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-slate-300 hover:border-[#FF6600] rounded-xl p-5 text-center cursor-pointer transition-colors bg-white group"
                      >
                        <div className="w-10 h-10 rounded-full bg-orange-50 group-hover:bg-orange-100 text-[#FF6600] flex items-center justify-center mx-auto mb-2 transition-colors">
                          <Upload className="w-5 h-5" />
                        </div>
                        <p className="text-xs font-bold text-slate-800">
                          Click to browse and upload image from your computer
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Supports JPG, PNG, WEBP. High-resolution photos are automatically optimized.
                        </p>
                      </div>

                      {/* Uploaded Preview */}
                      {formData.imageUrl && (
                        <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-slate-200">
                          <img
                            src={formData.imageUrl}
                            alt="Project Preview"
                            className="w-16 h-12 rounded-lg object-cover border border-slate-200"
                          />
                          <div className="flex-grow">
                            <span className="text-[10px] font-bold text-emerald-600 uppercase flex items-center gap-1">
                              <FileCheck className="w-3 h-3" />
                              <span>Active Image Loaded</span>
                            </span>
                            <p className="text-[11px] text-slate-500 truncate max-w-xs">
                              {formData.imageUrl.startsWith('data:') ? 'Custom local image file' : formData.imageUrl}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
                          >
                            Change Photo
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <p className="text-[11px] text-slate-500 mb-2">
                        Choose one of our architectural photography presets:
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { label: 'Residential Roof', url: IMAGES.heroArchitecture },
                          { label: 'Commercial Array', url: IMAGES.commercialSolar },
                          { label: 'Inverter & Battery', url: IMAGES.inverterStorage },
                          { label: 'Security & CCTV', url: IMAGES.cctvSecurity },
                        ].map((imgOpt, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setFormData({ ...formData, imageUrl: imgOpt.url })}
                            className={`p-1.5 rounded-xl border text-center transition-all ${
                              formData.imageUrl === imgOpt.url
                                ? 'border-[#FF6600] bg-orange-50 font-bold text-[#FF6600] ring-1 ring-[#FF6600]'
                                : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                            }`}
                          >
                            <img src={imgOpt.url} alt="" className="h-12 w-full object-cover rounded-lg mb-1" />
                            <span className="text-[10px] block truncate">{imgOpt.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Project Description</label>
                  <textarea
                    rows={3}
                    value={formData.description || ''}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Engineering description of the installation, rooftop profile, and load balancing..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#FF6600]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Key Highlights (one per line)
                  </label>
                  <textarea
                    rows={3}
                    value={highlightsInput}
                    onChange={(e) => setHighlightsInput(e.target.value)}
                    placeholder="Bifacial monocrystalline array elevated above roof terrace&#10;15 kW three-phase hybrid inverter with automated synchronization"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#FF6600] font-mono text-[11px]"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <span className="font-bold text-slate-800 uppercase text-[10px] tracking-wider block">
                    Hardware Specifications
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <span className="text-[10px] text-slate-500">Panels</span>
                      <input
                        type="text"
                        value={formData.systemDetails?.panels || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            systemDetails: { ...formData.systemDetails, panels: e.target.value },
                          })
                        }
                        placeholder="e.g. 585W Monocrystalline Bifacial Tier-1"
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500">Inverter</span>
                      <input
                        type="text"
                        value={formData.systemDetails?.inverter || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            systemDetails: { ...formData.systemDetails, inverter: e.target.value },
                          })
                        }
                        placeholder="e.g. 15 kW Three-Phase Inverter"
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500">Battery Storage</span>
                      <input
                        type="text"
                        value={formData.systemDetails?.battery || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            systemDetails: { ...formData.systemDetails, battery: e.target.value },
                          })
                        }
                        placeholder="e.g. 10.2 kWh LiFePO4 Storage"
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500">Monitoring / Telemetry</span>
                      <input
                        type="text"
                        value={formData.systemDetails?.monitoring || ''}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            systemDetails: { ...formData.systemDetails, monitoring: e.target.value },
                          })
                        }
                        placeholder="e.g. Wi-Fi Cloud Telemetry Portal"
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddMode(false);
                      setEditingProject(null);
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold uppercase tracking-wider shadow-sm"
                  >
                    Save Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
