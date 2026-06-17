import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { Link } from "@inertiajs/react";

const copy = {
    ms: {
        eyebrow: "Amaran Keselamatan",
        title: "Hati-hati dengan scammer yang menyamar sebagai pihak rasmi.",
        lead: "Pihak BIMB tidak akan meminta maklumat sensitif melalui panggilan, WhatsApp atau mesej peribadi. Jika ada yang mendesak anda, itu tanda amaran.",
        points: [
            "Jangan kongsi OTP, TAC, PIN, kata laluan, CVV atau nombor kad penuh.",
            "Semak nombor telefon, pautan dan akaun media sosial sebelum membuat sebarang tindakan.",
            "Jangan klik pautan pelik atau muat turun fail daripada mesej yang meragukan.",
            "Jika diminta bayar yuran pendahuluan untuk tuntutan hadiah, itu sangat berkemungkinan scam.",
        ],
        footer: "Jika ragu-ragu, hentikan perbualan dan semak melalui saluran rasmi dahulu.",
        button: "Semak Pemenang",
    },
    en: {
        eyebrow: "Security Alert",
        title: "Be careful of scammers pretending to be official staff.",
        lead: "BIMB will not ask for sensitive information through calls, WhatsApp, or private messages. Pressure tactics are a warning sign.",
        points: [
            "Never share OTP, TAC, PIN, passwords, CVV, or your full card number.",
            "Verify phone numbers, links, and social accounts before taking action.",
            "Do not click suspicious links or download files from questionable messages.",
            "If you are asked to pay an advance fee to claim a prize, it is very likely a scam.",
        ],
        footer: "When in doubt, stop the conversation and verify through official channels first.",
        button: "Check Winner",
    },
};

export default function ScamWarning({ language = "ms", className = "" }) {
    const page = copy[language] ?? copy.ms;

    return (
        <section
            className={`rounded-2xl border border-[#f2c65f] bg-gradient-to-r from-[#fff9e6] via-white to-[#fff3d9] p-5 shadow-lg shadow-[#8f1437]/10 sm:p-7 ${className}`}
        >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dc2a54]/10 text-[#dc2a54]">
                            <WarningAmberIcon sx={{ fontSize: 28 }} />
                        </span>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b06a00]">
                            {page.eyebrow}
                        </p>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold leading-tight text-[#212121] sm:text-3xl">
                        {page.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5f5f5f] sm:text-base">
                        {page.lead}
                    </p>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white/85 px-4 py-3 text-[#dc2a54] shadow-sm ring-1 ring-[#f0d7dd]">
                    <ShieldOutlinedIcon />
                    <span className="text-sm font-semibold">
                        Saluran rasmi lebih selamat
                    </span>
                </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
                {page.points.map((point) => (
                    <div
                        key={point}
                        className="flex gap-3 rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-[#f3e0b8]"
                    >
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#dc2a54] text-xs font-bold text-white">
                            !
                        </span>
                        <p className="text-sm leading-6 text-[#4b4b4b]">
                            {point}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-xl bg-[#dc2a54] px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-white/95">{page.footer}</p>
                <Link
                    href="/check-pemenang"
                    className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-bold text-[#dc2a54] transition hover:bg-[#fff4f7]"
                >
                    {page.button}
                </Link>
            </div>
        </section>
    );
}
