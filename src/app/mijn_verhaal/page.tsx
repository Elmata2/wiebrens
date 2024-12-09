import Markdown from "markdown-to-jsx";
import { getMarkdownContent } from "@/lib/markdown";

export default function VerhaalPage() {
  const { content, metadata } = getMarkdownContent("jaap-wiebrens");

  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto px-4 py-8">
        <article className="prose prose-invert mx-auto">
          <Markdown>{content}</Markdown>
        </article>
      </main>
    </div>
  );
}
