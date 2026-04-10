import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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
          <Link to="/marketplace" className="w-full flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all ease-in-out duration-200">
            <span className="material-symbols-outlined">handshake</span>
            <span className="text-sm font-medium">서비스</span>
          </Link>
          <Link to="/about" className="w-full flex items-center gap-4 px-4 py-3 bg-white text-primary font-semibold rounded-lg transition-all ease-in-out duration-200">
            <span className="material-symbols-outlined">info</span>
            <span className="text-sm font-medium">재단 정보</span>
          </Link>
        </nav>
      </aside>

      <main className="lg:ml-64 pt-24 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 block"
            >
              우리의 신념 (Our Ethos)
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-primary leading-[1.1] mb-8 tracking-tighter"
            >
              규제 신뢰의 아키텍처.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-on-surface-variant max-w-2xl leading-relaxed"
            >
              Aegis Protocol은 법학적 전문성과 컴퓨팅 우수성의 접점에서 운영됩니다. 우리는 단순한 컴플라이언스 자동화를 넘어, 모든 트랜잭션에 디지털 정의의 철학을 인코딩합니다.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-surface-container-low p-2 rounded-xl border border-outline-variant/10">
              <img 
                alt="Foundation Visual" 
                className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZiyUDvZ8UuMM5Z9bL1G20kDdLkca7ToDspMLt6qBbZRMYBUUrja_Ta6Q_gDYMoYIjlCYOo_eS0ZZPxPFI6S00NXkZmhA7bwwXt-qfA-j7c7uDYj5IMHp4ou8HQk2ixeJM0TMyGpXmFxw16pA5VU2mMCChwjyXzjhGHwAvEwcr63GNKZNuTqev8JPCiSpQtDmkJReCBN6GH31CVeumGlH8zHRHvO23BTW7pMJBnyzjpTQcKbZpQXgEeecU4WyWy-nkSfPiatqbD-1G" 
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </section>

        {/* About Us & Mission */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h3 className="text-2xl font-bold text-primary mb-6">회사 소개 (About Us)</h3>
                <div className="h-1 w-12 bg-primary mb-8 rounded-full" />
                <p className="text-on-surface-variant text-sm leading-loose">
                  디지털 경제에는 더욱 정교한 법적 감독 계층이 필요하다는 원칙 위에 설립된 Aegis Protocol은 기관 수준의 컴플라이언스를 위한 기술적 기반을 제공합니다.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-16">
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/10"
              >
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-primary-container">rocket_launch</span>
                  미션 (Mission)
                </h4>
                <p className="text-on-surface-variant leading-relaxed text-lg italic border-l-4 border-primary/30 pl-6">
                  "투명성을 보장하고 마찰을 줄이며 글로벌 디지털 시장의 무결성을 유지하는 자율형 AI 시스템을 통해 기관 수준의 규제 모니터링을 대중화하는 것."
                </p>
              </motion.div>
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/10"
              >
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">layers</span>
                  조정의 깊이 (Tonal Depth)
                </h4>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  우리의 방법론은 다층적인 분석을 활용합니다. 우리는 데이터를 분리하여 보지 않습니다. 역사, 맥락, 의도의 렌즈를 통해 데이터를 바라봅니다. 이러한 "조정의 깊이"를 통해 우리의 프로토콜은 단순한 이상 징후와 혁신을 구분할 수 있습니다.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="h-20 bg-primary rounded-lg flex items-end p-3 shadow-md"><span className="text-white text-[10px] font-bold uppercase tracking-widest">Obsidian</span></div>
                  <div className="h-20 bg-surface-container-highest rounded-lg flex items-end p-3"><span className="text-primary text-[10px] font-bold uppercase tracking-widest">Mist</span></div>
                  <div className="h-20 bg-primary-fixed rounded-lg flex items-end p-3"><span className="text-primary text-[10px] font-bold uppercase tracking-widest">Azure</span></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="mb-32">
          <h3 className="text-3xl font-bold text-primary mb-12 tracking-tight">문의 인프라 (Contact Infrastructure)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0px_12px_32px_rgba(0,30,64,0.06)] border border-outline-variant/10">
              <h4 className="text-xl font-bold mb-8">직접 문의</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">조직명</label>
                    <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-colors py-3 text-on-surface outline-none" placeholder="Global Entity Ltd." type="text"/>
                  </div>
                  <div className="relative">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">프로토콜 이메일</label>
                    <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-colors py-3 text-on-surface outline-none" placeholder="official@entity.jurist" type="email"/>
                  </div>
                </div>
                <div className="relative">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">규제 범위</label>
                  <textarea className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-colors py-3 text-on-surface outline-none resize-none" placeholder="모니터링 요구 사항을 설명해 주세요..." rows={4}></textarea>
                </div>
                <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-sm tracking-widest uppercase hover:shadow-lg transition-all flex items-center gap-3 active:scale-95">
                  프로토콜 개시
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </form>
            </div>
            <div className="bg-primary text-white p-8 md:p-12 rounded-xl flex flex-col justify-between shadow-xl">
              <div>
                <span className="material-symbols-outlined text-4xl mb-6 text-primary-fixed-dim">location_on</span>
                <h4 className="text-xl font-bold mb-4">중앙 허브</h4>
                <p className="text-primary-fixed-dim text-sm leading-relaxed mb-8">
                  Jurist Tower, Floor 44<br/>
                  Regulatory District, Suite 101<br/>
                  London, EC2V 6AA<br/>
                  United Kingdom
                </p>
              </div>
              <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
                <img 
                  alt="Office Location Map" 
                  className="w-full h-32 object-cover opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCGZtx57BjMC1zjXfwf4MIb-qiTjx88tP3RjPtixlRchZSLE-mkjZjThWeGMvwdu4m0Jc6_XIU1f5FPyy6ZSTIYjGVv5oZMTtAufZ3PfaQ48pHVWG406e2Bspu1JXAVXyud1udJ1ExATGkf2tvBjm9_kOJXJ1Wlcuq0kbWW4ucNeXHBGnlGM0f4BvgPRhbhhA5iViSeBtMfQHsRM4lT8EcVmtDubVF38tS7ivWMXdHQ7wMMR2r3hQWpsQ2B4jnz4t9QjZVHFYfjVDr" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="max-w-4xl mx-auto mb-32">
          <div className="bg-white p-12 md:p-20 border-t-8 border-primary rounded-xl shadow-lg">
            <h3 className="text-3xl font-black text-primary mb-12 tracking-tighter">개인정보 보호 및 데이터 주권 정책</h3>
            <div className="space-y-10 text-on-surface-variant leading-relaxed">
              {[
                { icon: 'verified_user', title: '1.0 핵심 철학', text: 'Aegis Protocol은 "최소 권한 발견" 원칙을 준수합니다. 우리는 규제 모니터링을 수행하는 데 필요한 메타데이터만 수집합니다. 모든 식별 가능한 엔티티 데이터는 프로토콜 수집 전 엣지에서 해시 및 솔트 처리됩니다.' },
                { icon: 'gavel', title: '2.0 규제 준수', text: '우리의 데이터 처리 절차는 GDPR 제25조(설계에 의한 개인정보 보호), CCPA 및 MiCA 프레임워크를 준수합니다. 우리는 모든 제3자 대시보드 감사를 위해 엄격한 "영지식(Zero-Knowledge)" 증명 시스템을 유지합니다.' },
                { icon: 'history', title: '3.0 데이터 보관 및 주기', text: '로그는 활성 조사가 플래그 지정되지 않는 한 정확히 7번의 규제 주기(약 255일) 동안 보관됩니다. 주기가 완료되면 데이터는 암호화 삭제를 사용하여 영구적으로 삭제됩니다.' }
              ].map((policy, i) => (
                <div key={i}>
                  <h5 className="text-primary font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">{policy.icon}</span>
                    {policy.title}
                  </h5>
                  <p className="text-sm leading-relaxed">{policy.text}</p>
                </div>
              ))}
              <div className="pt-8 border-t border-outline-variant/15 flex justify-between items-center text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-[0.2em]">
                <span>최종 업데이트: 2023년 10월</span>
                <span>문서 ID: AEGIS-P-2023-REV4</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
