export function Field({
    label,
    type = "text",
    name,
    placeholder,
    autoComplete,
    error,
    ...props
}) {
    return (
        <label className="block min-w-0">
            <span className="block text-sm font-semibold leading-5 text-[#424242]">
                {label}
            </span>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                autoComplete={autoComplete}
                {...props}
                className="mt-1.5 h-11 w-full rounded-md border border-[#d8d8d8] bg-white px-4 text-sm text-[#212121] outline-none transition placeholder:text-[#9e9e9e] focus:border-[#dc2a54] focus:ring-4 focus:ring-[#dc2a54]/10 sm:h-12"
            />
            {error && (
                <span className="mt-2 block text-xs font-semibold text-[#dc2a54]">
                    {error}
                </span>
            )}
        </label>
    );
}

export function SelectField({ label, name, children, ...props }) {
    return (
        <label className="block">
            <span className="text-sm font-semibold text-[#424242]">
                {label}
            </span>
            <select
                name={name}
                {...props}
                className="mt-2 h-12 w-full rounded-md border border-[#d8d8d8] bg-white px-4 text-sm text-[#212121] outline-none transition focus:border-[#dc2a54] focus:ring-4 focus:ring-[#dc2a54]/10"
            >
                {children}
            </select>
        </label>
    );
}

export function PrimaryButton({ children, disabled = false }) {
    return (
        <button
            type="submit"
            disabled={disabled}
            className="h-12 w-full rounded-md bg-[#dc2a54] px-5 text-sm font-bold text-white shadow-lg shadow-[#8f1437]/20 transition hover:bg-[#b91f46] disabled:cursor-not-allowed disabled:opacity-70"
        >
            {children}
        </button>
    );
}
