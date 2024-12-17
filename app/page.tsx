export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Atelier Sow
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Sound Of Wisdom
          </p>
          <p className="text-lg text-gray-500">
            김정민 · 이혜은
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            우리의 철학
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">지혜로운 공간 설계</h3>
              <p className="text-gray-600">
                아틀리에 소우는 공간에 대한 깊은 이해와 창의적인 해석을 통해 
                사용자의 일상에 영감을 불어넣는 건축을 추구합니다.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">지속가능한 디자인</h3>
              <p className="text-gray-600">
                환경과 조화를 이루는 지속가능한 건축을 통해 
                더 나은 미래를 설계합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
