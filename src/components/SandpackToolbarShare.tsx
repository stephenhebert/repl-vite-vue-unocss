import { useState } from "react";
import { copy } from "../utils/clipboard";

enum ShareStatus {
  Idle,
  Copied,
}

export function SandpackToolbarShare() {
  const [copied, setCopied] = useState(ShareStatus.Idle);

  const share = async () => {
    const shareableUrl = window.location.href;
    console.log({ shareableUrl });
    await copy(shareableUrl);
    setCopied(ShareStatus.Copied);
    setTimeout(() => {
      setCopied(ShareStatus.Idle);
    }, 2000);
  };

  return (
    <button onClick={share}>
      {copied === ShareStatus.Copied ? <span>Copied!</span> : <span>Share</span>}
    </button>
  );
}