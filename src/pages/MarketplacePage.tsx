import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const MarketplacePage = () => {
  return (
    <div className="bg-surface text-on-surface font-sans antialiased min-h-screen">
      {/* Sidebar (Desktop) */}
      <aside className="fixed left-0 top-0 h-full w-64 z-40 flex flex-col bg-surface-container-low shadow-[0px_12px_32px_rgba(0,30,64,0.06)] hidden lg:flex pt-24 px-4 border-r border-outline-variant/10">
        <nav className="space-y-2">
          <Link to="/dashboard" className="w-full flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all ease-in-out duration-200">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">대시보드</span>
          </Link>
          <Link to="/academy" className="w-full flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all ease-in-out duration-200">
            <span className="material-symbols-outlined">school</span>
            <span className="text-sm font-medium">아카데미</span>
          </Link>
          <Link to="/marketplace" className="w-full flex items-center gap-4 px-4 py-3 bg-white text-primary font-semibold rounded-lg transition-all ease-in-out duration-200">
            <span className="material-symbols-outlined">handshake</span>
            <span className="text-sm font-medium">서비스</span>
          </Link>
          <Link to="/about" className="w-full flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all ease-in-out duration-200">
            <span className="material-symbols-outlined">info</span>
            <span className="text-sm font-medium">재단 정보</span>
          </Link>
        </nav>
      </aside>

      <main className="lg:ml-64 max-w-[1400px] mx-auto px-6 py-12 flex flex-col gap-12">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase">
              <div className="pulse-agent" />
              규제 모니터링 활성화됨
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.1]"
            >
              대규모 기관급 <span className="text-primary-container">무결성</span>.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-on-surface-variant max-w-2xl leading-relaxed"
            >
              모듈형 마켓플레이스를 통해 세계 최고 수준의 규제 전문 지식을 배포하십시오. 자동화된 AI 에이전트부터 고위 디지털 법무관까지, Aegis Protocol이 귀하의 운영 규정 준수를 보장합니다.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 pt-4"
            >
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:scale-95 duration-150 transition-transform">
                파운데이션 탐색하기
              </button>
              <button className="bg-surface-container-highest text-on-surface-variant px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-variant transition-colors">
                문서 보기
              </button>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                alt="미래 지향적인 서버룸" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApiH7oDQWBWvd00molPjGZxQdFSbRTBeV1DjIcY1Hjl7j9sOKz1NuKOjQMs1bdMNufm6XnI5zYXFK8E81Lfy_4TTjZbTmPrtpUSPfy09wxZTK_3TpJBQQ1vKFWcZKiTHEmyztghn6gCNQxef1AcOCAvjMQ9Px78Bm2VAC83mMWBlydhkxPnxVc95XOhWkl_1C5irhSh2z33x1R2Br_hNIh6Skuu5okzz41Eu2z-gWNIJKvSk8yFQ2qjHWwtEGf8r1UPaIhY16Z3rdw" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl p-6 rounded-xl shadow-xl border border-white/20 max-w-[240px]">
              <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">시스템 상태</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">활성 노드</span>
                  <span className="font-mono text-primary font-bold">1,240</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full w-[88%]"></div>
                </div>
                <p className="text-[10px] text-on-surface-variant leading-tight">컴플라이언스 스캐닝 빈도: 15ms 지연 시간 확인됨.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Service Bento Grid */}
        <section className="mt-12">
          <div className="flex flex-col gap-2 mb-10">
            <h2 className="text-3xl font-bold text-on-surface tracking-tight">서비스 프로토콜 모듈</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* AI Agent Development */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 border border-outline-variant/10"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="material-symbols-outlined text-4xl text-primary bg-primary-fixed px-4 py-4 rounded-xl" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                  <span className="px-4 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-tighter">프리미엄 모듈</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">AI 에이전트 개발</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-lg">
                  특정 관할 구역의 명령에 따라 학습된 맞춤형 자율 컴플라이언스 에이전트입니다. 이 에이전트들은 실시간으로 거래를 모니터링하여 즉각적인 위험 완화 및 자동화된 보고를 제공합니다.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm text-primary">check_circle</span> 
                    실시간 관할 구역 스캐닝
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm text-primary">check_circle</span> 
                    LLM 기반 법률 종합 분석
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <Link to="/payment" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold w-full md:w-auto hover:scale-95 duration-150 transition-transform text-center">에이전트 구독하기</Link>
              </div>
            </motion.div>

            {/* Consulting */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="md:col-span-2 bg-primary text-white rounded-xl p-8 flex flex-col justify-between shadow-xl"
            >
              <div>
                <span className="material-symbols-outlined text-3xl mb-6 text-primary-fixed-dim">handshake</span>
                <h3 className="text-xl font-bold mb-3">컨설팅</h3>
                <p className="text-primary-fixed-dim/80 text-sm leading-relaxed">
                  국가 간 핀테크 규제를 전문으로 하는 디지털 법무관의 직접적인 전략 자문입니다.
                </p>
              </div>
              <div className="mt-8">
                <button className="w-full bg-white text-primary py-3 rounded-lg font-bold hover:bg-primary-fixed transition-colors">지금 구매</button>
              </div>
            </motion.div>

            {/* Documentation Service */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="md:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between border border-outline-variant/10"
            >
              <div>
                <span className="material-symbols-outlined text-3xl mb-6 text-primary">policy</span>
                <h3 className="text-xl font-bold text-primary mb-3">문서화 서비스</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  규제 기관 제출을 위한 정책 프레임워크, 감사 추적 및 컴플라이언스 서류의 자동 생성 서비스입니다.
                </p>
              </div>
              <div className="mt-8">
                <button className="w-full bg-surface-container-highest text-on-surface-variant py-3 rounded-lg font-bold hover:bg-outline-variant transition-colors">구독하기</button>
              </div>
            </motion.div>

            {/* Role Substitute */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="md:col-span-2 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between border border-outline-variant/10 shadow-sm"
            >
              <div>
                <span className="material-symbols-outlined text-3xl mb-6 text-primary">badge</span>
                <h3 className="text-xl font-bold text-primary mb-3">직무 대행</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  감사 또는 확장 단계에서 필수적인 컴플라이언스 담당자 역할을 수행하는 임시 디지털 대리인입니다.
                </p>
              </div>
              <div className="mt-8">
                <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:scale-95 transition-transform duration-150">지금 구매</button>
              </div>
            </motion.div>

            {/* App Development */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="md:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between border border-outline-variant/10"
            >
              <div>
                <span className="material-symbols-outlined text-3xl mb-6 text-primary">developer_mode</span>
                <h3 className="text-xl font-bold text-primary mb-3">앱 개발</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  맞춤형 내부 대시보드 및 감사 포털을 포함한 규제 인터페이스의 풀스택 엔지니어링 서비스입니다.
                </p>
              </div>
              <div className="mt-8">
                <button className="w-full bg-surface-container-highest text-on-surface-variant py-3 rounded-lg font-bold hover:bg-outline-variant transition-colors">지금 구매</button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Informational Section */}
        <section className="bg-surface-container-lowest rounded-2xl p-12 flex flex-col md:flex-row gap-12 items-center border border-outline-variant/5 shadow-sm">
          <div className="md:w-1/3">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-6 shadow-lg">
              <span className="material-symbols-outlined text-3xl">terminal</span>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4 leading-tight">디지털 법무관 파운데이션</h2>
            <p className="text-on-surface-variant text-sm leading-loose">
              Aegis 프레임워크를 기반으로 구축된 당사의 서비스는 최신 탈중앙화 법률 및 전산 규제를 활용합니다. 단순한 서비스를 넘어 알고리즘적 확실성을 제공합니다.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: 'encrypted', title: '영지식 감사', desc: '민감한 내부 데이터를 노출하지 않고 컴플라이언스를 검증합니다.' },
              { icon: 'cloud_done', title: '즉각적인 검증', desc: '기관의 신뢰 유지를 위한 자동화된 "검증됨" 상태 제공.' },
              { icon: 'language', title: '글로벌 범위', desc: '180개 이상의 글로벌 관할 구역에서 15ms 지연 시간으로 지원.' },
              { icon: 'hub', title: '모듈형 API', desc: '기존 스택에 Aegis 모듈을 원활하게 통합할 수 있습니다.' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-surface rounded-xl flex items-start gap-4 border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-tighter">{item.title}</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MarketplacePage;
