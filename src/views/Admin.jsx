'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

const passwordSecret = 'admin123'

const models = [
    { name: 'blog', label: 'Blogs' },
    { name: 'service', label: 'Services' },
    { name: 'work', label: 'Work' },
    { name: 'product', label: 'Products' }
]

export default function Admin() {
    const [auth, setAuth] = useState(false)
    const [passInput, setPassInput] = useState('')
    
    const [activeTab, setActiveTab] = useState('blog')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    // Form stuff
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({})

    useEffect(() => {
        if (auth) {
            fetchData()
        }
    }, [auth, activeTab])

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(`/api/crud/${activeTab}`)
            const json = await res.json()
            setData(Array.isArray(json) ? json : [])
        } catch (e) {
            console.error(e)
            setData([])
        }
        setLoading(false)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        if (passInput === passwordSecret) {
            setAuth(true)
        } else {
            alert('Incorrect password')
        }
    }

    const handleSave = async (e) => {
        e.preventDefault()
        const method = formData.id ? 'PUT' : 'POST'
        await fetch(`/api/crud/${activeTab}`, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        setFormData({})
        setIsEditing(false)
        fetchData()
    }

    const handleDelete = async (id) => {
        if(!confirm('Are you sure you want to delete this?')) return
        await fetch(`/api/crud/${activeTab}?id=${id}`, { method: 'DELETE' })
        fetchData()
    }

    if (!auth) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
                <form onSubmit={handleLogin} className="glass-card p-10 rounded-2xl flex flex-col gap-4 border border-white/10">
                    <h1 className="text-2xl font-bold mb-4">Admin Access</h1>
                    <input 
                        type="password" 
                        value={passInput} 
                        onChange={e => setPassInput(e.target.value)}
                        placeholder="Master Password"
                        className="bg-black/40 border border-white/20 p-3 rounded text-white"
                    />
                    <button type="submit" className="bg-blue-600 hover:bg-blue-500 py-3 rounded font-bold transition">Login</button>
                    <p className="text-xs text-white/40 text-center mt-2">Hint: Use 'admin123'</p>
                </form>
            </div>
        )
    }

    // Dynamic Form Renderer based on Active Tab
    const renderFormInputs = () => {
        const fields = {
            blog: ['format', 'icon', 'title', 'description', 'image'],
            service: ['icon', 'title', 'tagline', 'provideText', 'howText', 'benefitText'],
            work: ['title', 'tagline', 'icon', 'problem', 'solution', 'technologiesRaw', 'colorsRaw'],
            product: ['title', 'description', 'coreFeaturesRaw', 'useCasesRaw', 'benefitsRaw']
        }

        return fields[activeTab].map(field => (
            <div key={field} className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-wider text-blue-300 font-bold">{field}</label>
                {field.includes('Raw') || field.includes('description') || field.includes('Text') || field.includes('solution') || field.includes('problem') ? (
                    <textarea 
                        value={formData[field] || ''}
                        onChange={e => setFormData({ ...formData, [field]: e.target.value })}
                        className="bg-black/40 border border-white/10 p-3 rounded text-white text-sm min-h-[100px]"
                        placeholder={field.includes('Raw') ? 'JSON Array or Object...' : 'Enter text...'}
                        required
                    />
                ) : (
                    <input 
                        type="text" 
                        value={formData[field] || ''}
                        onChange={e => setFormData({ ...formData, [field]: e.target.value })}
                        className="bg-black/40 border border-white/10 p-3 rounded text-white text-sm"
                        required
                    />
                )}
            </div>
        ))
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 font-display pt-24 px-6 md:px-12 pb-24">
            <Navbar />
            
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-10">
                {/* Sidebar */}
                <div className="w-full md:w-64 flex flex-col gap-2">
                    <h2 className="text-xl font-bold mb-4 px-2 tracking-tight">Data Models</h2>
                    {models.map(m => (
                        <button 
                            key={m.name} 
                            onClick={() => { setActiveTab(m.name); setIsEditing(false); setFormData({}); }}
                            className={`text-left px-4 py-3 rounded-lg font-bold border transition ${activeTab === m.name ? 'bg-blue-600/20 text-blue-400 border-blue-500/50' : 'bg-transparent text-white/50 border-transparent hover:bg-white/5 hover:text-white'}`}
                        >
                            {m.label}
                        </button>
                    ))}
                    <button onClick={() => window.location.href="/"} className="mt-auto px-4 py-3 text-sm text-white/30 hover:text-white transition text-left mt-10 border-t border-white/10">Return to Site</button>
                </div>

                {/* Main Content */}
                <div className="flex-1 glass-card border border-white/10 p-6 md:p-10 rounded-[2rem] bg-slate-900/50">
                    <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                        <h1 className="text-3xl font-bold capitalize">{activeTab} Management</h1>
                        {!isEditing && (
                            <button 
                                onClick={() => { setFormData({}); setIsEditing(true); }}
                                className="bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 border border-emerald-500/30 px-4 py-2 rounded-lg font-bold text-sm transition flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-[18px]">add</span> Create New
                            </button>
                        )}
                    </div>

                    {isEditing ? (
                        <form onSubmit={handleSave} className="flex flex-col gap-6 animate-in fade-in zoom-in duration-300">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {renderFormInputs()}
                            </div>
                            <div className="flex gap-4 mt-4 pt-6 border-t border-white/10">
                                <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-3 rounded bg-white/5 hover:bg-white/10 transition">Cancel</button>
                                <button type="submit" className="px-6 py-3 rounded bg-blue-600 hover:bg-blue-500 font-bold transition">Save {activeTab}</button>
                            </div>
                        </form>
                    ) : (
                        loading ? (
                            <div className="py-20 text-center text-white/40 flex flex-col items-center gap-4">
                                <span className="material-symbols-outlined animate-spin text-4xl text-blue-500">autorenew</span>
                                Loading data...
                            </div>
                        ) : data.length === 0 ? (
                            <div className="py-20 text-center text-white/40 flex flex-col items-center gap-4">
                                <span className="material-symbols-outlined text-4xl">database</span>
                                No records found for '{activeTab}'. Create one to get started.
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-4">
                                {data.map((item) => (
                                    <div key={item.id} className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-white/20 transition group">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-lg text-blue-300">{item.title}</span>
                                            <span className="text-sm text-white/50">{item.description || item.tagline || item.problem?.substring(0, 50) + '...'}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button 
                                                onClick={() => { setFormData(item); setIsEditing(true); }}
                                                className="bg-white/10 hover:bg-blue-500/50 p-2 rounded block"
                                            >
                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(item.id)}
                                                className="bg-white/10 hover:bg-red-500/50 text-red-300 p-2 rounded block"
                                            >
                                                <span className="material-symbols-outlined text-[18px]">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
