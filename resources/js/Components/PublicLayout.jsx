import { Link } from "@inertiajs/react";
import { useState } from "react";

const copy = {
    ms: {
        register: "Daftar Pelanggan",
        memberLogin: "Log Masuk Ahli",
        adminLogin: "Log Masuk Admin",
        checkWinner: "Semak Pemenang",
        language: "English",
        locale: "MY",
        secure: "Portal Ganjaran Rasmi",
    },
    en: {
        register: "Customer Registration",
        memberLogin: "Member Login",
        adminLogin: "Admin Login",
        checkWinner: "Check Winner",
        language: "Bahasa Malaysia",
        locale: "EN",
        secure: "Official Rewards Portal",
    },
};

const partnerLogos = [
    "/logo/logo_kantor/AKPK-1.png",
    "/logo/logo_kantor/BNM.png",
    "/logo/logo_kantor/FIMM.png",
    "/logo/logo_kantor/fmos-bimb-1.png",
    "/logo/logo_kantor/IAP.png",
    "/logo/logo_kantor/INCEIF.png",
    "/logo/logo_kantor/MIFC.png",
    "/logo/logo_kantor/PIDM.png",
    "/logo/logo_kantor/SCM.png",
    "/logo/logo_kantor/SDREC.png",
    "/logo/logo_kantor/SMEinfo.png",
    "/logo/logo_kantor/Takaful-Malaysia.png",
];

export function useLanguage(initial = "ms") {
    const [language, setLanguage] = useState(initial);

    return {
        language,
        setLanguage,
        text: copy[language],
        toggleLanguage: () =>
            setLanguage((current) => (current === "ms" ? "en" : "ms")),
    };
}

export function PublicLayout({
    children,
    language = "ms",
    onToggleLanguage,
    compact = false,
    floatingHeader = false,
    showHeader = true,
}) {
    const text = copy[language] ?? copy.ms;

    return (
        <div className="min-h-screen  font-sans text-[#212121]">
            {showHeader && (
                <header
                    className={`${floatingHeader ? "absolute left-0 right-0 top-0" : "sticky top-0 border-b border-white/40 bg-white/95 shadow-sm"} z-50 backdrop-blur`}
                >
                    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
                        <Link
                            href="/"
                            className={`flex items-center gap-3 ${floatingHeader ? "rounded-md bg-white/95 px-3 py-2 shadow-lg shadow-black/10" : ""}`}
                        >
                            <img
                                src="/logo/bimb-web-768x386.png"
                                alt="BIMB Malaysia"
                                className="h-11 w-auto object-contain"
                            />
                            <span className="hidden border-l border-[#d8d8d8] pl-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#dc2a54] sm:inline">
                                Rewards
                            </span>
                        </Link>

                        <div className="flex items-center gap-2">
                            <nav className="hidden items-center gap-2 lg:flex">
                                <Link
                                    className="rounded-md px-4 py-2 text-sm font-semibold text-[#dc2a54] transition hover:bg-[#dc2a54]/8"
                                    href="/check-pemenang"
                                >
                                    {text.checkWinner}
                                </Link>
                                {/* <Link className="rounded-md px-4 py-2 text-sm font-semibold text-[#dc2a54] transition hover:bg-[#dc2a54]/8" href="/member/login">
                                    {text.memberLogin}
                                </Link> */}
                            </nav>
                            {onToggleLanguage && (
                                <button
                                    type="button"
                                    onClick={onToggleLanguage}
                                    className="rounded-md border border-[#d8d8d8] bg-white px-3 py-2 text-xs font-bold text-[#dc2a54] shadow-sm transition hover:border-[#dc2a54]"
                                >
                                    {text.locale}
                                </button>
                            )}
                            {/* <Link
                                href="/member/register"
                                className="rounded-md bg-[#dc2a54] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#b91f46]"
                            >
                                {compact ? text.register.split(' ')[0] : text.register}
                            </Link> */}
                            <Link
                                className="rounded-md px-4 py-2 text-sm font-semibold text-[#dc2a54] transition hover:bg-[#dc2a54]/8"
                                href="/check-pemenang"
                            >
                                {text.checkWinner}
                            </Link>
                        </div>
                    </div>
                </header>
            )}

            {children}

            <footer className="overflow-hidden bg-white">
                <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
                    <div className="grid gap-6 border-b border-[#eeeeee] pb-8 lg:grid-cols-[0.9fr_1.1fr]">
                        <div>
                            <div className="flex items-center gap-3">
                                <img
                                    src="/logo/App-Icon.png"
                                    alt="BIMB"
                                    className="h-10 w-10 rounded-md"
                                />
                                <div>
                                    <p className="text-sm font-bold text-[#212121]">
                                        {text.secure}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-5 max-w-md text-sm leading-7 text-[#616161]">
                                Saluran digital untuk semakan ganjaran.
                            </p>
                        </div>
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#dc2a54]">
                                Rakan Kerjasama
                            </p>
                            <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
                                {partnerLogos.map((logo) => (
                                    <div
                                        key={logo}
                                        className="flex h-14 items-center justify-center rounded-md border border-[#eeeeee] bg-white px-3 shadow-sm"
                                    >
                                        <img
                                            src={logo}
                                            alt=""
                                            className="max-h-9 max-w-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-6 text-xs text-[#757575] sm:flex-row sm:items-center sm:justify-between">
                        <span>
                            Copyright 2026 Bank Islam Malaysia Berhad. All
                            rights reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
