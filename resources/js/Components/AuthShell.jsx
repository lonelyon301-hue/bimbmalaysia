import { Link } from '@inertiajs/react';

export default function AuthShell({ title, subtitle, children, variant = 'member' }) {
    const isAdmin = variant === 'admin';

    return (
        <main className="bimb-pink-pattern min-h-screen">
            <div className="grid min-h-screen lg:grid-cols-[0.95fr_1.05fr]">
                <section className="hidden px-10 py-12 text-white lg:flex lg:flex-col lg:justify-between">
                    <Link href="/" className="inline-flex w-fit items-center gap-3">
                        <img src="/logo/bimb-web-768x386.png" alt="BIMB Malaysia" className="h-12 w-auto rounded bg-white px-3 py-1" />
                        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white">Rewards</span>
                    </Link>

                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                            {isAdmin ? 'Pentadbiran Selamat' : 'Akses Pelanggan'}
                        </p>
                        <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-tight">
                            {isAdmin ? 'Urus pengesahan hadiah dengan keyakinan.' : 'Semak dan urus ganjaran anda dengan mudah.'}
                        </h1>
                        <p className="mt-6 max-w-lg text-base leading-8 text-white/85">
                            {isAdmin
                                ? 'Akses dalaman untuk pengurusan rekod pelanggan, semakan pemenang, dan pemantauan status tuntutan.'
                                : 'Portal ganjaran BIMB menyediakan akses tersusun untuk pendaftaran, semakan kelayakan, dan status hadiah.'}
                        </p>
                    </div>

                    <p className="text-sm text-white/75">Bank Islam Malaysia Berhad</p>
                </section>

                <section className="flex items-center justify-center px-5 py-10 sm:px-8">
                    <div className="w-full max-w-md">
                        <div className="mb-8 flex items-center justify-between lg:hidden">
                            <Link href="/">
                                <img src="/logo/bimb-web-768x386.png" alt="BIMB Malaysia" className="h-12 w-auto" />
                            </Link>
                            <Link href="/" className="rounded-md border border-[#d8d8d8] px-3 py-2 text-sm font-semibold text-[#dc2a54]">
                                Laman Utama
                            </Link>
                        </div>

                        <div className="rounded-lg border border-white/80 bg-white p-7 shadow-2xl shadow-[#8f1437]/20 sm:p-9">
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#dc2a54]">
                                BIMB Malaysia Rewards
                            </p>
                            <h2 className="mt-4 text-3xl font-semibold text-[#212121]">{title}</h2>
                            <p className="mt-3 text-sm leading-6 text-[#616161]">{subtitle}</p>
                            {children}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
