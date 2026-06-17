import { Head, Link } from "@inertiajs/react";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import BadgeIcon from "@mui/icons-material/Badge";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SearchIcon from "@mui/icons-material/Search";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useEffect, useState } from "react";
import { PublicLayout, useLanguage } from "../Components/PublicLayout";

const sliders = [
    "/banner_slider/Slider_bimb_utama.png",
    "/banner_slider/slider_bimb_second.png",
    "/banner_slider/slider_bmb_third.png",
    "/banner_slider/slider_bmb_four.png",
    "/banner_slider/slider_bimb_fifth.png",
    "/banner_slider/slider_bmb_six.png",
];

const serviceIcons = [
    PersonAddAltIcon,
    FactCheckIcon,
    LoginIcon,
    AssignmentTurnedInIcon,
];
const stepIcons = [HowToRegIcon, SearchIcon, TaskAltIcon];
const assuranceIcons = [BadgeIcon, WorkspacePremiumIcon, VerifiedUserIcon];

const content = {
    ms: {
        head: "Portal Semakan Hadiah",
        eyebrow: "Semakan Status Ganjaran",
        title: "Semak status hadiah dengan cepat dan mudah.",
        lead: "Platform semakan untuk mendapatkan maklumat terkini berkaitan status hadiah dan keputusan semakan.",

        register: "Semakan Status",
        login: "Maklumat Semakan",
        check: "Semak Sekarang",

        trust: ["Semakan pantas", "Pengesahan automatik", "Maklumat terkini"],

        sectionTitle: "Proses semakan hadiah",
        sectionLead:
            "Setiap langkah direka untuk memberikan pengalaman semakan yang mudah, jelas dan teratur.",

        help: "Pusat Bantuan",

        cards: [
            [
                "Masukkan Maklumat",
                "Lengkapkan maklumat yang diperlukan untuk semakan.",
            ],
            ["Semakan Sistem", "Sistem melakukan pengesahan secara automatik."],
            ["Lihat Keputusan", "Status hadiah dipaparkan serta-merta."],
            ["Ikuti Arahan", "Rujuk panduan yang diberikan selepas semakan."],
        ],

        processTitle: "Cara Semakan Dilakukan",
        processLead:
            "Ikuti langkah mudah untuk menyemak status hadiah dan mendapatkan keputusan semakan.",

        assuranceTitle: "Semakan Yang Jelas Dan Teratur",
        assuranceLead:
            "Maklumat diproses secara sistematik bagi memastikan keputusan semakan dipaparkan dengan tepat.",

        assurance: [
            [
                "Pengesahan Maklumat",
                "Maklumat yang diberikan akan disemak secara automatik oleh sistem.",
            ],
            [
                "Status Semakan",
                "Keputusan dipaparkan berdasarkan maklumat yang berjaya disahkan.",
            ],
            [
                "Panduan Lanjut",
                "Arahan seterusnya akan dipaparkan mengikut keputusan semakan.",
            ],
        ],

        supportTitle: "Bantuan Semakan",
        supportLead:
            "Dapatkan maklumat dan panduan berkaitan proses semakan melalui saluran yang disediakan.",

        steps: [
            [
                "Masukkan Maklumat",
                "Lengkapkan maklumat yang diperlukan untuk memulakan semakan.",
            ],
            [
                "Pengesahan Sistem",
                "Sistem akan menyemak dan mengesahkan maklumat secara automatik.",
            ],
            [
                "Lihat Keputusan",
                "Keputusan semakan dipaparkan bersama maklumat berkaitan.",
            ],
        ],
    },

    en: {
        head: "Reward Status Portal",
        eyebrow: "Reward Verification",
        title: "Check your reward status quickly and easily.",
        lead: "A verification platform that provides the latest information regarding reward status and verification results.",

        register: "Status Check",
        login: "Verification Info",
        check: "Check Now",

        trust: [
            "Fast verification",
            "Automated validation",
            "Up-to-date information",
        ],

        sectionTitle: "Reward verification process",
        sectionLead:
            "Each step is designed to provide a simple, clear and organized verification experience.",

        help: "Help Centre",

        cards: [
            [
                "Enter Information",
                "Complete the required information for verification.",
            ],
            [
                "System Verification",
                "The system performs automatic validation.",
            ],
            ["View Results", "Reward status is displayed instantly."],
            [
                "Follow Instructions",
                "Refer to the guidance provided after verification.",
            ],
        ],

        processTitle: "How Verification Works",
        processLead:
            "Follow simple steps to verify reward status and receive verification results.",

        assuranceTitle: "Clear And Organized Verification",
        assuranceLead:
            "Information is processed systematically to ensure accurate verification results.",

        assurance: [
            [
                "Information Validation",
                "Submitted information is automatically reviewed by the system.",
            ],
            [
                "Verification Status",
                "Results are displayed based on successfully validated information.",
            ],
            [
                "Next Steps",
                "Further instructions are displayed according to the verification outcome.",
            ],
        ],

        supportTitle: "Verification Support",
        supportLead:
            "Access information and guidance related to the verification process through the available channels.",

        steps: [
            [
                "Enter Information",
                "Provide the required information to begin verification.",
            ],
            [
                "System Validation",
                "The system reviews and validates the submitted information automatically.",
            ],
            [
                "View Results",
                "Verification results are displayed together with related information.",
            ],
        ],
    },
};

export default function Home() {
    const { language, text, toggleLanguage } = useLanguage();
    const [active, setActive] = useState(0);
    const [showWinnerModal, setShowWinnerModal] = useState(true);
    const page = content[language];

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActive((current) => (current + 1) % sliders.length);
        }, 5200);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <PublicLayout
            language={language}
            onToggleLanguage={toggleLanguage}
            showHeader={true}
        >
            <Head title={page.head} />

            <main>
                <section className="bimb-pink-arc relative aspect-[16/9] overflow-hidden text-white sm:aspect-auto sm:min-h-screen">
                    <div
                        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${active * 100}%)` }}
                    >
                        {sliders.map((image, index) => (
                            <img
                                key={image}
                                src={image}
                                alt={
                                    index === 0
                                        ? "BIMB Malaysia rewards campaign"
                                        : ""
                                }
                                className="h-full w-full shrink-0 object-contain object-center sm:object-cover"
                            />
                        ))}
                    </div>
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="absolute top-[10%] left-[50%] flex h-full items-center justify-center px-5 bimb-reveal">
                        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                            <Link
                                href="/check-pemenang"
                                className="min-w-32 rounded-md bg-[#dc2a54] px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-white shadow-2xl shadow-black/30 transition hover:bg-[#b91f46] sm:min-w-56 sm:px-7 sm:py-4 sm:text-sm"
                            >
                                {page.check}
                            </Link>
                            {/* <Link href="/member/register" className="min-w-32 rounded-md bg-white px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#dc2a54] shadow-2xl shadow-black/25 transition hover:bg-[#f5f5f5] sm:min-w-56 sm:px-7 sm:py-4 sm:text-sm">
                                {page.register}
                            </Link> */}
                        </div>
                    </div>
                    <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
                        {sliders.map((image, index) => (
                            <button
                                key={image}
                                type="button"
                                aria-label={`Slide ${index + 1}`}
                                onClick={() => setActive(index)}
                                className={`h-2.5 rounded-full transition-all ${active === index ? "w-9 bg-white" : "w-2.5 bg-white/55 hover:bg-white/80"}`}
                            />
                        ))}
                    </div>
                </section>

                <section className="h-[300px] relative py-16 bimb-reveal">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="mb-10 max-w-3xl text-black">
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/75">
                                {page.eyebrow}
                            </p>
                            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                                {page.sectionTitle}
                            </h2>
                            <p className="mt-4 text-base leading-8 text-black/85">
                                {page.sectionLead}
                            </p>
                        </div>
                    </div>
                </section>
                <div className="px-4 md:px-8 lg:px-16 mt-9">
                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {page.cards.map(([title, description], index) => (
                            <article
                                key={title}
                                className="group overflow-hidden rounded-lg bg-white shadow-xl shadow-[#8f1437]/20 bimb-reveal transition hover:-translate-y-2"
                                style={{ animationDelay: `${index * 90}ms` }}
                            >
                                <div className="h-2 bg-[#b91f46]" />
                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#dc2a54]/10 bimb-float">
                                            {(() => {
                                                const Icon =
                                                    serviceIcons[index];

                                                return (
                                                    <Icon
                                                        className="text-[#dc2a54]"
                                                        sx={{ fontSize: 46 }}
                                                    />
                                                );
                                            })()}
                                        </div>
                                        <span className="rounded-md bg-[#dc2a54] px-3 py-2 text-xs font-bold text-white">
                                            0{index + 1}
                                        </span>
                                    </div>
                                    <h3 className="mt-6 text-xl font-semibold text-[#212121]">
                                        {title}
                                    </h3>
                                    <p className="mt-3 min-h-20 text-sm leading-6 text-[#616161]">
                                        {description}
                                    </p>
                                    <div className="mt-6 flex items-center justify-between border-t border-[#e0e0e0] pt-4">
                                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#dc2a54]">
                                            BIMB Rewards
                                        </span>
                                        <span className="h-2 w-10 rounded-full bg-[#dc2a54] transition group-hover:w-14" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
                <section className="bimb-soft-panel py-16 bimb-reveal">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="max-w-3xl">
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#dc2a54]">
                                {text.secure}
                            </p>
                            <h2 className="mt-3 text-3xl font-semibold text-[#dc2a54] sm:text-4xl">
                                {page.processTitle}
                            </h2>
                            <p className="mt-4 text-base leading-8 text-[#616161]">
                                {page.processLead}
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {page.steps.map(([title, description], index) => (
                                <article
                                    key={title}
                                    className="rounded-lg border border-[#f3d4dc] bg-white p-6 shadow-sm shadow-[#dc2a54]/8 bimb-reveal transition hover:-translate-y-1"
                                    style={{
                                        animationDelay: `${index * 110}ms`,
                                    }}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#dc2a54] text-sm font-bold text-white">
                                            {index + 1}
                                        </span>
                                        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#dc2a54]/10 text-[#dc2a54]">
                                            {(() => {
                                                const Icon = stepIcons[index];

                                                return (
                                                    <Icon
                                                        sx={{ fontSize: 30 }}
                                                    />
                                                );
                                            })()}
                                        </span>
                                    </div>
                                    <h3 className="mt-5 text-xl font-semibold text-[#dc2a54]">
                                        {title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-[#616161]">
                                        {description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bimb-pink-arc py-16 text-white bimb-reveal">
                    <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">
                                {page.eyebrow}
                            </p>
                            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                                {page.assuranceTitle}
                            </h2>
                            <p className="mt-4 text-sm leading-7 text-white/85">
                                {page.assuranceLead}
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                            {page.assurance.map(
                                ([title, description], index) => (
                                    <article
                                        key={title}
                                        className="rounded-lg bg-white p-6 text-[#212121] shadow-xl shadow-[#8f1437]/20 bimb-reveal transition hover:-translate-y-1"
                                        style={{
                                            animationDelay: `${index * 110}ms`,
                                        }}
                                    >
                                        <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#dc2a54]/10 text-[#dc2a54]">
                                            {(() => {
                                                const Icon =
                                                    assuranceIcons[index];

                                                return (
                                                    <Icon
                                                        sx={{ fontSize: 34 }}
                                                    />
                                                );
                                            })()}
                                        </span>
                                        <h3 className="mt-5 text-lg font-semibold text-[#dc2a54]">
                                            {title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-[#616161]">
                                            {description}
                                        </p>
                                    </article>
                                ),
                            )}
                        </div>
                    </div>
                </section>
                {/* bimb-pink-pattern */}
                <section className="bg-white py-16 bimb-reveal">
                    <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
                        <div>
                            <h2 className="text-3xl font-semibold text-[#dc2a54]">
                                {page.processTitle}
                            </h2>
                            <p className="mt-4 text-sm leading-7 text-[#616161]">
                                {page.processLead}
                            </p>
                        </div>
                        <div className="grid gap-4">
                            {page.steps.map(([title, description], index) => (
                                <div
                                    key={title}
                                    className="flex gap-5 rounded-lg border border-[#f3d4dc] bg-white p-5 shadow-sm shadow-[#dc2a54]/8 bimb-reveal transition hover:border-[#dc2a54]/40"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#dc2a54] text-sm font-bold text-white">
                                        {index + 1}
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-[#212121]">
                                            {title}
                                        </h3>
                                        <p className="mt-1 text-sm leading-6 text-[#616161]">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bimb-pink-pattern py-16 text-white bimb-reveal">
                    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-semibold sm:text-4xl">
                                {page.supportTitle}
                            </h2>
                            <p className="mt-4 text-base leading-8 text-white/85">
                                {page.supportLead}
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/check-pemenang"
                                className="rounded-md bg-white px-6 py-3 text-sm font-bold text-[#dc2a54] shadow-lg shadow-[#8f1437]/20 transition hover:bg-[#f5f5f5]"
                            >
                                {page.check}
                            </Link>
                            <Link
                                href="/member/register"
                                className="rounded-md border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/12"
                            >
                                {page.register}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <a
                href="/check-pemenang"
                className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rounded-l-lg border-4 border-white bg-[#dc2a54] px-4 py-8 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-xl [writing-mode:vertical-rl] lg:block"
            >
                {page.help}
            </a>

            {showWinnerModal && (
                <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 px-4 py-5 backdrop-blur-sm">
                    <section className="relative w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-2xl shadow-black/30 sm:max-w-2xl">
                        <button
                            type="button"
                            aria-label="Tutup modal semakan pemenang"
                            onClick={() => setShowWinnerModal(false)}
                            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-lg font-bold text-[#dc2a54] shadow-lg transition hover:bg-[#fff4f7]"
                        >
                            ×
                        </button>

                        <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
                            <div className="bimb-pink-pattern relative h-36 overflow-hidden sm:h-auto sm:min-h-72">
                                <img
                                    src="/banner_slider/slider_bmb_third.png"
                                    alt="Kempen ganjaran BIMB"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-[#dc2a54]/15" />
                            </div>

                            <div className="p-5 sm:p-7">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dc2a54]">
                                    Semakan Pemenang
                                </p>
                                <h2 className="mt-2 text-xl font-bold leading-tight text-[#212121] sm:text-2xl">
                                    Anda mungkin pemenang BIMB.
                                </h2>
                                <p className="mt-3 text-sm leading-6 text-[#616161]">
                                    Semak status anda sekarang dan lihat arahan
                                    tuntutan rasmi jika layak.
                                </p>

                                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                                    <Link
                                        href="/check-pemenang"
                                        className="rounded-md bg-[#dc2a54] px-4 py-2.5 text-center text-sm font-bold text-white shadow-lg shadow-[#8f1437]/20 transition hover:bg-[#b91f46]"
                                    >
                                        Semak Sekarang
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowWinnerModal(false)
                                        }
                                        className="rounded-md border border-[#f0c8d2] px-4 py-2.5 text-sm font-bold text-[#dc2a54] transition hover:bg-[#fff4f7]"
                                    >
                                        Nanti Dahulu
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </PublicLayout>
    );
}
