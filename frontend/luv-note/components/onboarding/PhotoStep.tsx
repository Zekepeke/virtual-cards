"use client";

import React, { useMemo, useState } from "react";
import { RomanticButton } from "../romantic-button";
import { createSupabaseBrowserClient } from "@/lib/supbabase/client";

type Props = {
  userId: string;
  onDone: (photoUrl?: string) => void;
  onSkip: () => void;
};

export function PhotoStep({ userId, onDone, onSkip }: Props) {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onPick(f: File | null) {
    setError(null);
    setFile(f);
    if (!f) {
      setPreview(null);
      return;
    }
    setPreview(URL.createObjectURL(f));
  }

  async function uploadAndFinish() {
    setError(null);

    if (!file) {
      onDone(undefined);
      return;
    }

    setLoading(true);
    try {
      const bucket = "couple-photos";
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${userId}/${crypto.randomUUID()}.${ext}`;

      const { error: upErr } = await supabase.storage.from(bucket).upload(path, file, {
        cacheControl: "3600",
        upsert: true,
      });
      if (upErr) throw upErr;

      const { data } = supabase.storage.from(bucket).getPublicUrl(path);
      onDone(data.publicUrl);
    } catch (e: any) {
      setError(e?.message ?? "Upload failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[var(--charcoal)] mb-2">Add a couple photo (optional)</h2>
        <p className="text-[var(--charcoal-lighter)]">
          Makes your couple profile feel more personal.
        </p>
      </div>

      <div className="border border-[var(--border)] rounded-[var(--radius-xl)] p-4 bg-white/60">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => onPick(e.target.files?.[0] ?? null)}
        />

        {preview ? (
          <div className="mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview}
              alt="Preview"
              className="w-full h-56 object-cover rounded-[var(--radius-xl)]"
            />
          </div>
        ) : (
          <p className="text-[var(--charcoal-lighter)] text-sm mt-3">
            Choose a photo to preview it here.
          </p>
        )}
      </div>

      {error ? <p className="text-red-600 text-sm">{error}</p> : null}

      <div className="flex gap-3">
        <RomanticButton variant="primary" className="flex-1" onClick={uploadAndFinish} disabled={loading}>
          {loading ? "Saving..." : "Finish"}
        </RomanticButton>
        <RomanticButton variant="ghost" className="flex-1" onClick={onSkip} disabled={loading}>
          Skip
        </RomanticButton>
      </div>
    </div>
  );
}