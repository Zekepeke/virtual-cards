"use client";

import { useMemo, useState } from "react";
import { RomanticButton } from "../romantic-button";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export function PhotoStep({
  userId,
  onDone,
  onSkip,
  loading,
}: {
  userId: string;
  onDone: (photoUrl?: string) => void;
  onSkip: () => void;
  loading?: boolean;
}) {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function pick(f: File | null) {
    setError(null);
    setFile(f);
    setPreview(f ? URL.createObjectURL(f) : null);
  }

  async function upload() {
    setError(null);

    if (!file) {
      onDone(undefined);
      return;
    }

    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${userId}/${crypto.randomUUID()}.${ext}`;

      const { error: upErr } = await supabase
        .storage
        .from("couple-photos")
        .upload(path, file, { upsert: true });

      if (upErr) throw upErr;

      const { data } = supabase.storage.from("couple-photos").getPublicUrl(path);
      onDone(data.publicUrl);
    } catch (e: any) {
      setError(e?.message ?? "Upload failed.");
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[var(--charcoal)] mb-2">Add a couple photo (optional)</h2>
        <p className="text-[var(--charcoal-lighter)]">
          This shows up on your couple profile.
        </p>
      </div>

      <div className="border border-[var(--border)] rounded-[var(--radius-xl)] p-4 bg-white/60">
        <input type="file" accept="image/*" onChange={(e) => pick(e.target.files?.[0] ?? null)} />
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={preview}
            alt="preview"
            className="mt-4 w-full h-56 object-cover rounded-[var(--radius-xl)]"
          />
        ) : (
          <p className="text-[var(--charcoal-lighter)] text-sm mt-3">No photo selected.</p>
        )}
      </div>

      {error ? <p className="text-red-600 text-sm">{error}</p> : null}

      <div className="flex gap-3">
        <RomanticButton variant="primary" className="flex-1" onClick={upload} disabled={loading}>
          Finish
        </RomanticButton>
        <RomanticButton variant="ghost" className="flex-1" onClick={onSkip} disabled={loading}>
          Skip
        </RomanticButton>
      </div>
    </div>
  );
}