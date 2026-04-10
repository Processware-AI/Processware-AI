import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [paymentType, setPaymentType] = useState('card');

  return (
    <div className="bg-surface text-on-surface font-sans antialiased min-h-screen">
      {/* TopAppBar (Transactional) */}
      <header className="flex justify-between items-center w-full px-6 py-4 max-w-full bg-surface sticky top-0 z-50 border-b border-outline-variant/10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <h1 className="font-bold text-lg tracking-tight text-primary">안전 결제</h1>
        </div>
        <div className="h-10">
          <img 
            alt="Processware Logo" 
            className="h-full w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uhl6JFd8pwmRRoAU7sExRat1320S1IeLZRY9-efULuLrm6Z5MiYAvvLo-tblZcLO40QB-mxiIGq7q1ciHq0OyTISNg3DDYlssPqUYheqx45ElkcR9EzXj9JwTFQD1UFwsYHb5g-RAcMWeC-Q61QUwNIQWjvfVMJ258UIFuG1fCeEIEr_X0Abrz7GKrIFk87meg1fhn-ANrLKuxda-ELxdCn5cQo8XhyMZ5oUvrwm5lUir7c2XRLZRul8KllNEZ7oiQrBlizFn0pCC8" 
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Payment Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Transaction Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse shadow-[0_0_8px_rgba(167,200,255,0.8)]"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">암호화된 세션 활성화됨</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-primary">결제 수단 선택</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">ASPICE 구독 설정을 완료하기 위한 결제 수단을 선택해 주세요.</p>
            </div>

            {/* Toss Payments UI Simulation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_12px_32px_rgba(0,30,64,0.04)] border border-outline-variant/15"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
                  <span className="font-bold text-primary">토스페이먼츠</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-surface-container text-on-surface-variant px-2 py-1 rounded">개발자 샌드박스</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { id: 'card', label: '카드', icon: 'credit_card' },
                  { id: 'transfer', label: '계좌이체', icon: 'account_balance' },
                  { id: 'virtual', label: '가상계좌', icon: 'vpn_key' }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setPaymentType(option.id)}
                    className={cn(
                      "flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all duration-200",
                      paymentType === option.id 
                        ? "border-primary bg-primary-fixed/20 shadow-sm" 
                        : "border-transparent bg-surface-container-low hover:border-outline-variant/30"
                    )}
                  >
                    <span className={cn(
                      "material-symbols-outlined mb-2",
                      paymentType === option.id ? "text-primary" : "text-on-surface-variant"
                    )}>{option.icon}</span>
                    <span className={cn(
                      "text-sm",
                      paymentType === option.id ? "font-bold text-primary" : "font-medium text-on-surface-variant"
                    )}>{option.label}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">카드 번호</label>
                  <input 
                    className="w-full bg-transparent border-b-2 border-outline-variant px-0 py-3 focus:border-primary focus:ring-0 transition-colors placeholder:text-outline-variant outline-none" 
                    placeholder="0000 0000 0000 0000" 
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">유효 기간</label>
                    <input 
                      className="w-full bg-transparent border-b-2 border-outline-variant px-0 py-3 focus:border-primary focus:ring-0 transition-colors placeholder:text-outline-variant outline-none" 
                      placeholder="MM / YY" 
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">CVC</label>
                    <input 
                      className="w-full bg-transparent border-b-2 border-outline-variant px-0 py-3 focus:border-primary focus:ring-0 transition-colors placeholder:text-outline-variant outline-none" 
                      placeholder="123" 
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-outline-variant/15">
                <div className="flex items-start gap-3">
                  <input className="mt-1 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    <span className="underline cursor-pointer">서비스 이용약관</span>에 동의하며 Aegis Protocol이 토스페이먼츠를 통해 본 거래를 안전하게 처리하는 것에 동의합니다.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Safe Aesthetic Note */}
            <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-lg border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <p className="text-sm text-on-surface-variant">본 거래는 은행 수준의 256비트 SSL 암호화로 보호되며 Aegis Digital Jurist AI에 의해 모니터링됩니다.</p>
            </div>
          </div>

          {/* Summary Column */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-[0px_12px_32px_rgba(0,30,64,0.06)] border border-white">
              <h3 className="text-xl font-bold text-primary mb-6">주문 요약</h3>
              <div className="flex gap-4 mb-8">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                  <img 
                    alt="Tech infrastructure" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiSWtheVkuqE5d17L1an9sV7H6hBsuNxUyILX0At8-H_0FeaLAg7M6mXBMV0UnN7BodaiMuqne8YIeHPJzVKVti89fy9QRr5581FNLFknkvOEFqLORtr710NUMmRclBjXw5Ki0fKtZXhbJJRscs8x6PCIQb-WTCDiw1Pl4jAfbey41RpLq70MRaRBdDJqeWbTDU-0BeUIsGAWhuVuvOxH-N_cn15UIL9WVM9k-DjeFeDczQ47IPq2GZ9YzXPZy7EVSefj9WGVxrzfJ" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">프로페셔널 티어</span>
                  <h4 className="font-bold text-on-surface">ASPICE 컨설팅 구독</h4>
                  <p className="text-sm text-on-surface-variant">월 단위 결제 • 언제든 취소 가능</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">소계</span>
                  <span className="font-medium">$1,250.00</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">부가세 (10%)</span>
                  <span className="font-medium">$125.00</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span className="text-on-surface-variant">AI 모니터링 수수료</span>
                  <span className="text-primary font-medium">포함됨</span>
                </div>
                <div className="h-px bg-outline-variant/15 my-4"></div>
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold text-primary">총 결제 금액</span>
                  <div className="text-right">
                    <span className="text-3xl font-black text-primary">$1,375.00</span>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">USD</p>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 rounded-lg bg-primary text-white font-bold text-lg shadow-lg hover:scale-[0.98] transition-all active:scale-95 mb-4">
                지금 결제하기
              </button>
              <p className="text-center text-xs text-on-surface-variant">
                결제 처리는 <span className="font-bold">Aegis SecurePay</span>를 통해 진행됩니다.
              </p>
            </div>

            {/* Supplemental Image Card */}
            <div className="rounded-2xl overflow-hidden relative group shadow-lg">
              <img 
                alt="Financial analysis" 
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoR4c973XK8kG2Pbw7UXt681B0K0RDau-Zm5olB8qAfDKss3xsDLPGOm2N8OUcKK2n1NUR-P4sv2qX-pNHMZDSGgyqYH8eKsWl5eLuaxBpoDTYK_SoY0m61qMOQ0q9dPlri6VG8GvF0SFQdXTM_PNrDyl1tf-lypG_pnmIsxMMuGHHPGdC2xJHFOhWw_6I0yrwxgK83Fwtra-RhhMqlP0rPQ7PbwG3_WyNHqiqL9tenBsFaqok-JPLPGUz3CBlMAz8Xxd7Tri8w6N5" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Aegis Intelligence</p>
                  <h5 className="text-sm font-bold">규제 모니터링 포함됨</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
