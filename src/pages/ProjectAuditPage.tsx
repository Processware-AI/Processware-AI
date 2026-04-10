import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Link, useNavigate } from 'react-router-dom';

const ProjectAuditPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-sans antialiased min-h-screen">
      {/* Sidebar (Desktop) */}
      <aside className="fixed left-0 top-0 h-full w-64 z-40 flex flex-col bg-surface-container-low shadow-[0px_12px_32px_rgba(0,30,64,0.06)] hidden lg:flex pt-24 px-4 border-r border-outline-variant/10">
        <nav className="space-y-2">
          <Link to="/dashboard" className="w-full flex items-center gap-4 px-4 py-3 bg-white text-primary font-semibold rounded-lg transition-all ease-in-out duration-200">
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
          <Link to="/about" className="w-full flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all ease-in-out duration-200">
            <span className="material-symbols-outlined">info</span>
            <span className="text-sm font-medium">재단 정보</span>
          </Link>
        </nav>
      </aside>

      <main className="lg:ml-64 pt-24 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero & Title Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-[10px] font-bold tracking-widest uppercase">Tier 1 감사</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,30,64,0.4)]"></div>
                  <span className="text-xs font-medium text-primary">실시간 모니터링</span>
                </div>
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-black text-primary tracking-tighter leading-none"
              >
                프로젝트: Aegis 감사 상세 내역
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-on-surface-variant max-w-2xl text-lg leading-relaxed pt-2"
              >
                디지털 자산 워크플로우에 대한 종합적인 규제 평가로, 관할권 준수 및 리스크 완화 프레임워크에 중점을 둡니다.
              </motion.p>
            </div>
            <div className="flex gap-3">
              <button className="bg-surface-container-highest text-on-surface-variant px-6 py-3 rounded-lg font-bold text-sm transition-all hover:bg-surface-variant">
                보고서 내보내기
              </button>
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95">
                최종 감사 제출
              </button>
            </div>
          </div>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Content Area */}
          <div className="md:col-span-8 space-y-6">
            {/* Task List Card */}
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_12px_32px_rgba(0,30,64,0.04)] border border-outline-variant/10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-primary tracking-tight">감사 마일스톤 과업</h3>
                <span className="text-xs font-semibold text-on-surface-variant">78% 완료됨</span>
              </div>
              <div className="space-y-1">
                {[
                  { title: '초기 프로토콜 탐색', date: '2023년 10월 12일 완료', status: 'completed' },
                  { title: '스마트 컨트랙트 보안 스캔', date: '2023년 10월 14일 완료', status: 'completed' },
                  { title: '규제 편차 문서화', date: '진행 중 • 내일 마감', status: 'active', urgent: true },
                  { title: '최종 컴플라이언스 증명', date: '10월 20일 예정', status: 'pending' }
                ].map((task, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "group flex items-center justify-between p-4 rounded-lg transition-colors",
                      task.status === 'active' ? "bg-surface-container-low" : "hover:bg-surface-container-low"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className={cn(
                        "material-symbols-outlined",
                        task.status === 'completed' ? "text-primary" : "text-outline"
                      )} style={{ fontVariationSettings: task.status === 'completed' ? "'FILL' 1" : "" }}>
                        {task.status === 'completed' ? 'check_circle' : 'radio_button_unchecked'}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-primary">{task.title}</p>
                        <p className="text-xs text-on-surface-variant">{task.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {task.urgent && (
                        <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold">긴급</span>
                      )}
                      <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors cursor-pointer">more_vert</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Status & Image Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_12px_32px_rgba(0,30,64,0.04)] border border-outline-variant/10">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">핵심 문서</h3>
                  <div className="space-y-4">
                    {[
                      { name: '감사_프레임워크_v2.pdf', icon: 'description', tag: '최종본', tagColor: 'bg-primary-fixed text-on-primary-fixed-variant' },
                      { name: '리스크_완화_초안.docx', icon: 'article', tag: '초안', tagColor: 'bg-surface-variant text-on-surface-variant' },
                      { name: '관할권_분석.pdf', icon: 'gavel', tag: '검토중', tagColor: 'bg-tertiary-fixed text-on-tertiary-fixed-variant' }
                    ].map((doc, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low border border-outline-variant/5">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-primary">{doc.icon}</span>
                          <span className="text-xs font-semibold">{doc.name}</span>
                        </div>
                        <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded", doc.tagColor)}>{doc.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden min-h-[200px] shadow-lg group">
                <img 
                  alt="디지털 보안 시각화" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTYjl6elK-RWnCxPRx1iPLuoQOln3wTW7ybZcl3Q-YYWY81_JuiKfU-Av4HjJiKxvn5rzfNj16hDN1c_ikZC8oxyTpYQw6OaQSogzpyglyy2GBo3fUXHhTcxwrfPBzbDm0B4IMFbFd4ObletcnwwEUwcR46PL2Q_2tsTe5bzN132fgR7k99EOhPOXvwiEyDe4h1T9FyUY-uzJALtUMUvMaIoPiBIegPpaimT23bV1L3KcpEXKn_RDtLzEOMXHlAZrUV3DdQR4GyEnE" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
                  <p className="text-white text-sm font-bold">보안 인프라 노드</p>
                  <p className="text-white/70 text-[10px] uppercase tracking-widest">활성 스캔 수행 중</p>
                </div>
              </div>
            </div>

            {/* Communication Thread */}
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_12px_32px_rgba(0,30,64,0.04)] border border-outline-variant/10">
              <h3 className="text-xl font-bold text-primary mb-6">감사 협의</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <img 
                    alt="팀원" 
                    className="w-10 h-10 rounded-lg object-cover shadow-sm" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv4gPwQtoW-0D1S8RmJI0ukIcOTWoWhImFPEQAL_4Ledek5KZekMXYVoQXw239gKKOd5wbOnGUKfrMq3VqJVkzWCMLwvxaX0A3CbZeDhAS0WzbKuQD0wnmpZFfrHLq3Yd-TTYWNkeyElCvuEzb_p9pFXuRAgLOgKpojNs5fNi29d-ctWI_KRlIriQJn-k6ckZz7axCvWMX6y3kuLqBShPLaYw5Uan7bzTJKn6FYkyllhqwb6g46uv9TZ03cmwBbZDGu3m5lS2kv5Cp" 
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-primary">Marcus Vane</span>
                      <span className="text-[10px] text-on-surface-variant">2시간 전</span>
                    </div>
                    <div className="bg-surface-container-low p-4 rounded-r-xl rounded-bl-xl text-sm leading-relaxed border border-outline-variant/5">
                      EU 관할권에 대한 편차 문서를 검토했습니다. 모든 것이 MiCA 가이드라인과 일치하는 것 같지만, 유동성 임계값에 대한 최종 확인이 필요합니다.
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 flex-row-reverse">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xs shadow-md">AJ</div>
                  <div className="flex-1 text-right">
                    <div className="flex items-center gap-2 mb-1 justify-end">
                      <span className="text-[10px] text-on-surface-variant">45분 전</span>
                      <span className="text-sm font-bold text-primary">Aegis AI 에이전트</span>
                    </div>
                    <div className="bg-primary text-white p-4 rounded-l-xl rounded-br-xl text-sm leading-relaxed inline-block text-left shadow-lg">
                      과거 변동성 데이터를 기반으로 EU 유동성 임계값을 분석 중입니다. 스캔 완료. 데이터 분석 결과 Tier 1 인증을 위해 1.2%의 버퍼 증가가 필요한 것으로 나타났습니다.
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-outline-variant/15">
                  <div className="relative">
                    <input 
                      className="w-full bg-transparent border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-sm py-3 px-4 transition-all outline-none" 
                      placeholder="의견을 추가하거나 규제 쿼리를 입력하세요..." 
                      type="text"
                    />
                    <button className="absolute right-2 top-1.5 p-2 text-primary hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Insights */}
          <div className="md:col-span-4 space-y-6">
            {/* Project Progress Card */}
            <div className="bg-primary text-white rounded-xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-10">
                <span className="material-symbols-outlined text-[160px]">history</span>
              </div>
              <h3 className="text-lg font-bold mb-6 tracking-tight">감사 타임라인</h3>
              <div className="space-y-6 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/20">
                {[
                  { step: '1단계', title: '데이터 수집', completed: true },
                  { step: '2단계', title: '내부 검토', completed: true },
                  { step: '3단계', title: '외부 검증', active: true },
                  { step: '4단계', title: '인증서 발행', pending: true }
                ].map((item, i) => (
                  <div key={i} className={cn("relative pl-8", item.pending && "opacity-40")}>
                    <div className={cn(
                      "absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center",
                      item.completed ? "bg-white" : item.active ? "bg-primary-fixed border-2 border-white animate-pulse" : "border-2 border-white"
                    )}>
                      {item.completed && <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/60">{item.step}</p>
                    <p className="text-sm font-bold">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Members Card */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_12px_32px_rgba(0,30,64,0.04)] border border-outline-variant/10">
              <h3 className="text-lg font-bold text-primary mb-6">검토 팀</h3>
              <div className="space-y-4">
                {[
                  { name: 'Sarah Chen', role: '수석 감사인', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW-c3g2LQeBXusha53nMe5NdRqLMjR6Au8sMongJ6VBuoyOZz80bs-WyscFCFpImf2-QD86STHOvHN34B8ef8nVyZeweCoD7gbvYFmxAlRS32sFlNpoHZb_9B0FMeJ-N2w_zT6SAJAb5QrGBfVxh1U74fvF4mwq58KIEVfd8h2yWFg_I5mHyLUNLf2VbgFaDwIPQyTRdOikZ8mwaP1OecqsXcddwW-fqNAL1JI96w9gmlMaF-BJ8dBMzIGXZPq0JhmCa7eia4tOl3e', online: true },
                  { name: 'Marcus Vane', role: '법률 고문', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR-DZRM8DyOd2wISll4x2JEgXIKGk_ybFubAlINd5euroVxtcZR4v6P4uVbZSLPaujLZFpVamgsE0FaiNCXo2TKIXTw67m0afLss3EZTnj24aXuaPgIGCFMjNGna0pJqjjmg4Nvz9A9Npz2s5yIj_hoSNkrOmkWZz9SB5u4qFgqFbGogwO6uMm03NzXY6DKj6G2x2uenOYRejXKTL2ENghYFUa1-qIGhfuPMTZpSwNSDkmWh51T3qrbZCoOPOUFF5xwZldqLHnpbai', online: true },
                  { name: 'David Russo', role: '리스크 분석가', initial: 'DR', online: false }
                ].map((member, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {member.img ? (
                        <img alt={member.name} className="w-8 h-8 rounded-full object-cover ring-2 ring-outline-variant/10" src={member.img} />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold text-on-secondary-container">{member.initial}</div>
                      )}
                      <div>
                        <p className="text-xs font-bold text-primary">{member.name}</p>
                        <p className="text-[10px] text-on-surface-variant">{member.role}</p>
                      </div>
                    </div>
                    <span className={cn("w-2 h-2 rounded-full", member.online ? "bg-green-500" : "bg-slate-300")}></span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2 border-2 border-outline-variant/30 rounded-lg text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:bg-surface-container-low transition-colors">
                기여자 추가
              </button>
            </div>

            {/* AI Insight Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-surface-container-lowest to-surface-container-low rounded-xl p-6 shadow-sm border border-primary/10 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 opacity-5">
                <span className="material-symbols-outlined text-[120px]">smart_toy</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary">AI 예측 리스크</h4>
              </div>
              <p className="text-sm font-medium text-primary leading-tight mb-4">"싱가포르의 규제 변화(10월 24일)가 현재 Tier 1 자격에 영향을 미칠 수 있습니다. 조기 전략 조정을 권장합니다."</p>
              <a className="text-[10px] font-bold text-primary underline decoration-2 underline-offset-4" href="#">전체 분석 읽기</a>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectAuditPage;
