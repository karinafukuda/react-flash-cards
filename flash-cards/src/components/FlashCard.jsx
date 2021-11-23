import { useState } from 'react';

export default function FlashCard({
  title = 'Título do card', //props
  description = 'Descrição Card',
}) {
  const [showTitle, setShowTitle] = useState(true);

  const fontSizeClass = showTitle ? 'text-xl' : 'text-md';

  function handleCardClick() {
    setShowTitle(currentShowTitle => !currentShowTitle);
  }

  return (
    <div
      className={`shadow-lg p-4 w-64 h-32 cursor-pointer
                  flex flex-row items-center justify-center 
                  font-semibold ${fontSizeClass}`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      onClick={handleCardClick}
    >
      {showTitle ? title : description}
    </div>
  );
}
