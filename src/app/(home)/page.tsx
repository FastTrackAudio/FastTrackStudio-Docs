import Link from "next/link";
import { Card, Cards } from "fumadocs-ui/components/card";
import { FolderTree, Sliders, Music } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-8 w-full">
      <h1 className="mb-8 text-4xl font-bold">FastTrack Studio</h1>
      <p className="mb-12 text-xl text-fd-muted-foreground">
        Documentation and resources for audio production
      </p>

      <Cards className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <Card
          title="Project Structure"
          href="/docs/project-structure"
          description="Overview of the codebase organization and architecture"
          icon={<FolderTree className="h-5 w-5 text-[#3b82f6]" />}
        />
        <Card
          title="The Tone Library (Coming Soon)"
          href="/docs/the-tone-library"
          description="Collection of guitar, bass, and synth tone presets for music production"
          icon={<Music className="h-5 w-5 text-[#f59e0b]" />}
        />
        <Card
          title="Vault of Processors (Coming Soon)"
          href="/docs/vault-of-processors"
          description="Technical documentation on audio processors including EQs, compressors, and other effects"
          icon={<Sliders className="h-5 w-5 text-[#10b981]" />}
        />
      </Cards>
    </main>
  );
}
