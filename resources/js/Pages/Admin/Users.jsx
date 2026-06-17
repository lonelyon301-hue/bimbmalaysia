import { Head } from '@inertiajs/react';
import AdminLayout from '../../Components/AdminLayout';

function formatDate(value) {
    return new Intl.DateTimeFormat('ms-MY', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date(value));
}

export default function Users({ users = [] }) {
    return (
        <AdminLayout
            title="User Admin"
            subtitle="Senarai akaun admin yang tersedia dalam sistem pada masa ini."
        >
            <Head title="User Admin" />

            <section className="rounded-lg border border-[#eeeeee] bg-white shadow-sm">
                <div className="flex flex-col gap-4 border-b border-[#eeeeee] p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-[#212121]">Senarai User</h2>
                        <p className="mt-1 text-sm text-[#616161]">Jumlah user: {users.length}</p>
                    </div>
                    <span className="w-fit rounded-md bg-[#dc2a54]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#dc2a54]">
                        Admin
                    </span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] text-left">
                        <thead className="bg-[#fff7fa] text-xs font-bold uppercase tracking-[0.12em] text-[#dc2a54]">
                            <tr>
                                <th className="px-5 py-4">ID</th>
                                <th className="px-5 py-4">Nama</th>
                                <th className="px-5 py-4">Email</th>
                                <th className="px-5 py-4">Dibuat Pada</th>
                                <th className="px-5 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#eeeeee]">
                            {users.map((user) => (
                                <tr key={user.id} className="transition hover:bg-[#fff7fa]">
                                    <td className="px-5 py-4 text-sm font-bold text-[#dc2a54]">#{user.id}</td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#dc2a54] text-sm font-bold text-white">
                                                {user.name?.charAt(0)?.toUpperCase() ?? 'U'}
                                            </span>
                                            <span className="text-sm font-semibold text-[#212121]">{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4 text-sm text-[#616161]">{user.email}</td>
                                    <td className="px-5 py-4 text-sm text-[#616161]">{formatDate(user.created_at)}</td>
                                    <td className="px-5 py-4">
                                        <span className="rounded-md bg-[#e9f8ef] px-3 py-2 text-xs font-bold text-[#16834a]">Aktif</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {users.length === 0 && (
                    <div className="p-8 text-center">
                        <p className="text-sm font-semibold text-[#616161]">Belum ada user admin.</p>
                    </div>
                )}
            </section>
        </AdminLayout>
    );
}
