"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useProjects } from "@/context/ProjectContext";

export default function AdminDashboard() {
    const { isAuthenticated, isLoading: authLoading, logout } = useAuth();
    const { projects, isLoading: projectsLoading, addProject, updateProject, deleteProject } = useProjects();
    const router = useRouter();

    const [showForm, setShowForm] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        roleKey: "frontend",
        image: "",
    });
    const [deleteConfirm, setDeleteConfirm] = useState(null);

    useEffect(() => {
        if (!authLoading && !isAuthenticated) {
            router.push("/admin/login");
        }
    }, [authLoading, isAuthenticated, router]);

    if (authLoading || projectsLoading) {
        return (
            <div className="admin-loading">
                <div className="spinner-large"></div>
                <p>Loading...</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    const handleLogout = () => {
        logout();
        router.push("/admin/login");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingProject) {
            updateProject(editingProject.id, formData);
        } else {
            addProject(formData);
        }

        setFormData({ title: "", roleKey: "frontend", image: "" });
        setShowForm(false);
        setEditingProject(null);
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setFormData({
            title: project.title,
            roleKey: project.roleKey,
            image: project.image,
        });
        setShowForm(true);
    };

    const handleDelete = (id) => {
        deleteProject(id);
        setDeleteConfirm(null);
    };

    const handleCancel = () => {
        setFormData({ title: "", roleKey: "frontend", image: "" });
        setShowForm(false);
        setEditingProject(null);
    };

    return (
        <div className="admin-dashboard">
            {/* Header */}
            <header className="admin-header">
                <div className="admin-header-content">
                    <div className="admin-header-left">
                        <h1>🛠️ Admin Dashboard</h1>
                        <p>Kelola project portfolio Anda</p>
                    </div>
                    <div className="admin-header-right">
                        <a href="/" className="admin-btn-secondary" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            Lihat Website
                        </a>
                        <button onClick={handleLogout} className="admin-btn-logout">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="16 17 21 12 16 7" />
                                <line x1="21" y1="12" x2="9" y2="12" />
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="admin-main">
                {/* Stats */}
                <div className="admin-stats">
                    <div className="admin-stat-card">
                        <div className="stat-icon">📁</div>
                        <div className="stat-info">
                            <h3>{projects.length}</h3>
                            <p>Total Project</p>
                        </div>
                    </div>
                </div>

                {/* Project Management */}
                <div className="admin-section">
                    <div className="admin-section-header">
                        <h2>📂 Daftar Project</h2>
                        <button
                            onClick={() => {
                                setShowForm(true);
                                setEditingProject(null);
                                setFormData({ title: "", roleKey: "frontend", image: "" });
                            }}
                            className="admin-btn-primary"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            Tambah Project
                        </button>
                    </div>

                    {/* Add/Edit Form */}
                    {showForm && (
                        <div className="admin-form-card">
                            <h3>{editingProject ? "✏️ Edit Project" : "➕ Tambah Project Baru"}</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="admin-form-group">
                                    <label htmlFor="title">Nama Project</label>
                                    <input
                                        type="text"
                                        id="title"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        placeholder="Contoh: E-Commerce Website"
                                        required
                                    />
                                </div>

                                <div className="admin-form-group">
                                    <label htmlFor="roleKey">Role</label>
                                    <select
                                        id="roleKey"
                                        value={formData.roleKey}
                                        onChange={(e) => setFormData({ ...formData, roleKey: e.target.value })}
                                    >
                                        <option value="frontend">Front-End Developer</option>
                                        <option value="fullstack">Full Stack Developer</option>
                                    </select>
                                </div>

                                <div className="admin-form-group">
                                    <label htmlFor="image">URL Gambar</label>
                                    <input
                                        type="text"
                                        id="image"
                                        value={formData.image}
                                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                        placeholder="/images/img/project.png atau https://..."
                                        required
                                    />
                                    <small>Gunakan path dari folder public atau URL eksternal</small>
                                </div>

                                {formData.image && (
                                    <div className="admin-image-preview">
                                        <p>Preview:</p>
                                        <img
                                            src={formData.image}
                                            alt="Preview"
                                            onError={(e) => e.target.style.display = 'none'}
                                        />
                                    </div>
                                )}

                                <div className="admin-form-actions">
                                    <button type="button" onClick={handleCancel} className="admin-btn-cancel">
                                        Batal
                                    </button>
                                    <button type="submit" className="admin-btn-primary">
                                        {editingProject ? "💾 Simpan Perubahan" : "➕ Tambah Project"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Project List */}
                    <div className="admin-project-list">
                        {projects.length === 0 ? (
                            <div className="admin-empty">
                                <p>Belum ada project. Klik "Tambah Project" untuk memulai.</p>
                            </div>
                        ) : (
                            projects.map((project) => (
                                <div key={project.id} className="admin-project-card">
                                    <div className="admin-project-image">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            onError={(e) => {
                                                e.target.src = '/images/img/placeholder.png';
                                            }}
                                        />
                                    </div>
                                    <div className="admin-project-info">
                                        <h4>{project.title}</h4>
                                        <span className="admin-project-role">
                                            {project.roleKey === "frontend" ? "Front-End Developer" : "Full Stack Developer"}
                                        </span>
                                    </div>
                                    <div className="admin-project-actions">
                                        <button
                                            onClick={() => handleEdit(project)}
                                            className="admin-btn-edit"
                                            title="Edit"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => setDeleteConfirm(project.id)}
                                            className="admin-btn-delete"
                                            title="Hapus"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                <line x1="10" y1="11" x2="10" y2="17" />
                                                <line x1="14" y1="11" x2="14" y2="17" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Delete Confirmation */}
                                    {deleteConfirm === project.id && (
                                        <div className="admin-delete-confirm">
                                            <p>Hapus project "{project.title}"?</p>
                                            <div className="confirm-actions">
                                                <button onClick={() => setDeleteConfirm(null)} className="admin-btn-cancel">
                                                    Batal
                                                </button>
                                                <button onClick={() => handleDelete(project.id)} className="admin-btn-delete-confirm">
                                                    Ya, Hapus
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
