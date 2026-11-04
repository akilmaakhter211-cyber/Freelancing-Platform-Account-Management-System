import { cn } from "@/lib/utils";

export default function Textarea({
  label,
  error,
  className,
  id,
  ...props
}) {
  const textareaId = id || props.name;

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}

      <textarea
        id={textareaId}
        rows={4}
        className={cn(
          "w-full resize-y rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100",
          error && "border-red-500",
          className
        )}
        {...props}
      />

      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}