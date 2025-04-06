import { getPressItems } from '@/lib/notion/notion';
import PageHeader from '../../components/PageHeader';
import PressClient from './PressClient';

// 페이지 동적 설정
export const revalidate = 10; // 10초마다 재검증

export default async function Press() {
  const pressItems = await getPressItems();
  console.log(pressItems);
  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
      <PageHeader title="보도자료" description="SOW의 미디어 커버리지 및 뉴스" />
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <PressClient pressItems={pressItems} />
        </div>
      </section>
    </main>
  );
}
