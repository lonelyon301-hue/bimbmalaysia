import { Link } from "@inertiajs/react";

const navItems = [
    ["Data Customer", "/admin/dashboard"],
    ["User Admin", "/admin/users"],
    ["Setting WA", "/admin/settings/wa"],
];

export default function AdminLayout({ title, subtitle, children }) {
    return (
        <div className="min-h-screen bg-[#f7f7f8] font-sans text-[#212121]">
            <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-[#eeeeee] bg-white lg:block">
                <div className="flex h-full flex-col">
                    <div className="border-b border-[#eeeeee] px-6 py-5">
                        <Link href="/" className="flex items-center gap-3">
                            <img
                                src="/logo/App-Icon.png"
                                alt="BIMB"
                                className="h-10 w-10 rounded-md"
                            />
                            <div>
                                <p className="text-sm font-bold text-[#212121]">
                                    BIMB Admin
                                </p>
                                <p className="text-xs text-[#757575]">
                                    Rewards Portal
                                </p>
                            </div>
                        </Link>
                    </div>

                    <nav className="flex-1 space-y-2 px-4 py-5">
                        {navItems.map(([label, href]) => (
                            <Link
                                key={href}
                                href={href}
                                className="block rounded-md px-4 py-3 text-sm font-semibold text-[#424242] transition hover:bg-[#dc2a54]/10 hover:text-[#dc2a54]"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className="m-4 rounded-lg bg-[#fff4f7] p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#dc2a54]">
                            Panel Admin
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#616161]">
                            Kelola data customer, user admin dan sambungan
                            WhatsApp.
                        </p>
                    </div>
                </div>
            </aside>

            <div className="lg:pl-72">
                <header className="sticky top-0 z-30 border-b border-[#eeeeee] bg-white/95 backdrop-blur">
                    <div className="flex min-h-20 items-center justify-between gap-4 px-5 sm:px-8">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dc2a54]">
                                Pentadbiran
                            </p>
                            <h1 className="mt-1 text-xl font-bold text-[#212121] sm:text-2xl">
                                {title}
                            </h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link
                                href="/admin/dashboard"
                                className="rounded-md border border-[#eeeeee] bg-white px-4 py-2 text-sm font-semibold text-[#424242] transition hover:border-[#dc2a54] hover:text-[#dc2a54]"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="/admin/settings/wa"
                                className="rounded-md border border-[#eeeeee] bg-[#dc2a54]/10 px-4 py-2 text-sm font-semibold text-[#dc2a54] transition hover:bg-[#dc2a54]/15 hover:border-[#dc2a54]"
                            >
                                Setting WA
                            </Link>
                            <Link
                                href="/"
                                className="rounded-md border border-[#eeeeee] px-4 py-2 text-sm font-semibold text-[#dc2a54] transition hover:border-[#dc2a54]"
                            >
                                Laman Utama
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="px-5 py-8 sm:px-8">
                    <div className="mb-7 max-w-3xl">
                        <p className="text-sm leading-7 text-[#616161]">
                            {subtitle}
                        </p>
                    </div>
                    {children}
                </main>
            </div>
        </div>
    );
}
