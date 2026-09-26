import { ProjectItem } from '../types';
import { PROJECTS as DEFAULT_PROJECTS } from '../data/siteData';

const STORAGE_KEY = 'powerace_projects_v2';
const AUTH_KEY = 'powerace_admin_session_v2';

export const getStoredProjects = (): ProjectItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
      return DEFAULT_PROJECTS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return DEFAULT_PROJECTS;
  } catch (e) {
    console.error('Failed to read projects from storage', e);
    return DEFAULT_PROJECTS;
  }
};

export const saveProjects = (projects: ProjectItem[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    window.dispatchEvent(new Event('powerace_projects_updated'));
  } catch (e) {
    console.error('Failed to save projects to storage', e);
  }
};

export const resetProjectsToDefault = (): ProjectItem[] => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
    window.dispatchEvent(new Event('powerace_projects_updated'));
    return DEFAULT_PROJECTS;
  } catch (e) {
    console.error('Failed to reset projects', e);
    return DEFAULT_PROJECTS;
  }
};

// Admin authentication helpers
export const isAdminAuthenticated = (): boolean => {
  try {
    return sessionStorage.getItem(AUTH_KEY) === 'true';
  } catch {
    return false;
  }
};

export const setAdminAuthenticated = (status: boolean): void => {
  try {
    if (status) {
      sessionStorage.setItem(AUTH_KEY, 'true');
    } else {
      sessionStorage.removeItem(AUTH_KEY);
    }
  } catch {}
};
