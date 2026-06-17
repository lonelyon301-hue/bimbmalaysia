import { Head } from "@inertiajs/react";

export default function HalamanPemenang() {
    return (
        <main className="bimb-pink-pattern flex min-h-screen items-center justify-center px-5 py-10 font-sans text-white sm:px-8">
            <Head title="Keputusan Pemenang" />

            <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-black/20 p-10 text-center shadow-2xl shadow-pink-900/30 backdrop-blur-xl">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/70">
                    Keputusan Semakan
                </p>

                <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                    Anda belum menang.
                </h1>

                <p className="mx-auto mt-5 max-w-xl text-lg font-medium leading-8 text-white/80">
                    Terima kasih kerana membuat semakan. Sila cuba lagi pada
                    masa akan datang atau semak maklumat anda sekali lagi.
                </p>
            </div>
        </main>
    );
}
