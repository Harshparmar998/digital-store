import './admin.css'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {

    const navigate = useNavigate()

    async function handleLogout() {

        await supabase.auth.signOut()

        navigate('/admin')

    }

    return (

        <section className="admin-dashboard">

            {/* SIDEBAR */}

            <div className="admin-sidebar">

                <div>

                    <div className="admin-logo">

                        <h2>
                            Nexora
                        </h2>

                        <p>
                            Admin Panel
                        </p>

                    </div>

                    <div className="admin-nav">

                        <Link
                            to="/admin/dashboard"
                            className="admin-nav-link"
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/admin/products"
                            className="admin-nav-link"
                        >
                            Products
                        </Link>

                        <button>
                            Orders
                        </button>

                        <button>
                            Analytics
                        </button>

                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="logout-btn"
                >
                    Logout
                </button>

            </div>

            {/* MAIN */}

            <div className="admin-main">

                <div className="admin-header">

                    <div>

                        <h1>
                            Admin Dashboard
                        </h1>

                        <p>
                            Manage your digital store professionally
                        </p>

                    </div>

                </div>

                {/* STATS */}

                <div className="admin-actions-grid">

                    <Link
                        to="/admin/products"
                        className="admin-action-link"
                    >
                        <div className="admin-action-card">

                            <span>
                                📦
                            </span>

                            <h3>
                                Manage Products
                            </h3>

                            <p>
                                Add, edit and remove
                                digital products
                            </p>

                        </div>
                    </Link>

                    <div className="admin-action-card disabled-card">

                        <span>
                            📊
                        </span>

                        <h3>
                            Analytics
                        </h3>

                        <p>
                            Sales insights and reports
                            coming soon
                        </p>

                    </div>

                    <div className="admin-action-card disabled-card">

                        <span>
                            🧾
                        </span>

                        <h3>
                            Orders
                        </h3>

                        <p>
                            Track customer orders
                            and payments
                        </p>

                    </div>

                </div>

                {/* ACTIONS */}



            </div>

        </section>

    )
}