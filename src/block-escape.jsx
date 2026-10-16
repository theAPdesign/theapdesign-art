import React from 'react';
import { ArrowRight, Hand, ShieldCheck, Sparkles, Trophy } from 'lucide-react';

const copy = {
  tr: {
    tag: 'iPhone için mantık bulmacası', title: 'Yolu gör.', accent: 'Tahtayı boşalt.',
    intro: 'Bir tahta, farklı şekiller ve her blok için tek bir yön. Yolu açık bloklara dokun, diğerlerine alan aç ve son bloğa kadar doğru sırayı bul.',
    chips: ['iOS 17 ve sonrası', '6 dil desteği', 'Açık ve koyu tema'], how: 'Nasıl oynanır?',
    rulesTitle: 'Her okun bir çıkışı var.', rulesText: 'Blokları sürüklemez veya döndürmezsin. Her blok yalnızca üzerindeki okun yönünde ilerler. Çözüm, doğru sırayı bulmakta.',
    steps: [
      ['Yönüne bak', 'Bloğun üzerindeki oku ve çıkışa kadar uzanan yolu incele.'],
      ['Yolu aç', 'Önü boş bir bloğa dokun. Başka bir blok yolu kapatıyorsa önce onu çıkarmanın yolunu bul.'],
      ['Tahtayı temizle', 'Blokları doğru sırayla çıkar. Son blok çıktığında yeni seviye açılır.'],
    ],
    panels: [
      ['Üç can. Düşünülmüş hamleler.', 'Her deneme 3 canla başlar. Bir çarpışma 1 can götürür; başarılı hamle canını azaltmaz. Önce yolu kontrol et, sonra dokun.'],
      ['Takıldığında küçük bir ışık.', 'Her yeni seviyeye 3 ipucuyla başla. İpucu, çıkabilecek bir bloğu gösterir. İpuçların bittiğinde ödüllü reklamla 3 ipucu daha alabilirsin.'],
      ['Her adımda yeni bir bulmaca.', 'Seviye haritasında ilerle; her onlunun dokuzuncu seviyesinde Zor, onuncu seviyesinde Çok Zor bulmacalarla karşılaş.'],
    ],
    detailsTitle: 'Senin ritminde, senin görünümünde.', details: 'Açık veya koyu temayı seç. Müzik, ses ve titreşimi ayrı ayrı ayarla. Türkçe, İngilizce, Almanca, Fransızca, İspanyolca ve İtalyanca dil seçenekleriyle oyna.',
    note: 'iPhone • iOS 17+ • Oynamak için internet bağlantısı gerekir.',
    faq: [
      ['İlerlemem nerede saklanır?', 'Tamamlanan seviyeler, en yüksek açık seviye ve ayarlar cihazında saklanır. Hesap girişi ve bulut senkronizasyonu bulunmaz. Devam eden seviyenin hamleleri kalıcı kaydedilmez.'],
      ['Reklam ve satın alma var mı?', 'Oyunda banner, geçiş ve isteğe bağlı ödüllü reklamlar bulunur. Apple üzerinden sunulan reklam kaldırma satın alımı banner ve geçiş reklamlarını kaldırır. İnternet bağlantısı yine gereklidir.'],
    ], faqTitle: 'Merak edilenler', privacy: 'Gizlilik Politikası', terms: 'Kullanım Şartları', back: 'Block Escape’e dön', date: 'Son güncelleme: 16 Ekim 2026',
  },
  en: {
    tag: 'A logic puzzle for iPhone', title: 'Find the way.', accent: 'Clear the board.',
    intro: 'One board, different shapes, and just one direction for each block. Tap blocks with a clear path, make room for the others, and find the right order until the board is empty.',
    chips: ['iOS 17 and later', '6 languages', 'Light and dark themes'], how: 'How to play',
    rulesTitle: 'Every arrow has a way out.', rulesText: 'You do not drag or rotate the blocks. Each block only moves in the direction of its arrow. The solution is in the order.',
    steps: [['Read the arrow', 'Look at the arrow on a block and follow its path to the edge.'], ['Make room', 'Tap a block with a clear path. If another block is in the way, work out how to remove it first.'], ['Clear the board', 'Remove blocks in the right order. Clear the last block to unlock the next level.']],
    panels: [['Three lives. Thoughtful moves.', 'Each attempt starts with 3 lives. A collision costs 1 life; a successful move costs none. Check the path, then tap.'], ['A little help when you need it.', 'Start each new level with 3 hints. A hint highlights a block that can leave. When you run out, a rewarded ad can give you 3 more.'], ['A new puzzle at every step.', 'Follow the level map. Every ninth level in a group of ten is Hard; every tenth is Very Hard.']],
    detailsTitle: 'Your pace. Your look.', details: 'Choose a light or dark theme. Set music, sound, and haptics separately. Play in Turkish, English, German, French, Spanish, or Italian.',
    note: 'iPhone • iOS 17+ • An internet connection is required to play.',
    faq: [['Where is my progress saved?', 'Completed levels, the highest unlocked level, and settings are saved on your device. There is no account sign-in or cloud sync. Moves in an unfinished level are not saved permanently.'], ['Are there ads or purchases?', 'The game includes banner, interstitial, and optional rewarded ads. The ad removal purchase through Apple removes banner and interstitial ads. An internet connection is still required.']],
    faqTitle: 'Good to know', privacy: 'Privacy Policy', terms: 'Terms of Use', back: 'Back to Block Escape', date: 'Last updated: October 16, 2026',
  },
};

export function BlockEscapeLegalLinks({ language = 'tr', back = false }) {
  const c = copy[language] || copy.tr;
  return <section className="relative z-10 px-5 py-10 sm:px-8">
    <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-soft">
      {back && <a className="block-escape-link" href="/block-escape/">{c.back}</a>}
      <a className="block-escape-link" href="/block-escape/gizlilik-politikasi/">{c.privacy}</a>
      <a className="block-escape-link" href="/block-escape/kullanim-sartlari/">{c.terms}</a>
    </div>
  </section>;
}

export function BlockEscapeContent({ language = 'tr' }) {
  const c = copy[language] || copy.tr;
  return <>
    <section className="relative z-10 px-5 pb-12 pt-28 sm:px-8 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1278d8]">{c.tag}</p>
          <h1 className="font-display text-[clamp(3rem,6.6vw,6.8rem)] font-black leading-[0.98] tracking-tight">{c.title}<span className="mt-2 block text-[#128cff]">{c.accent}</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/65">{c.intro}</p>
          <a href="#how-to-play" className="mt-7 inline-flex h-14 items-center gap-3 rounded-full bg-[#18253a] px-7 text-sm font-bold text-white transition hover:bg-[#1278d8]">{c.how}<ArrowRight size={18} /></a>
          <div className="mt-7 flex flex-wrap gap-2">{c.chips.map(chip => <span key={chip} className="rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold text-ink/65">{chip}</span>)}</div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute inset-8 rounded-full bg-sky-300/60 blur-3xl" />
          <div className="relative rounded-[2.25rem] border border-white bg-white p-4 shadow-glow"><img src="/block-escape-logo.png" alt={language === 'en' ? 'Block Escape app icon: blue and white blocks with a directional arrow' : 'Block Escape uygulama ikonu: yön oku bulunan mavi ve beyaz bloklar'} width="1024" height="1024" className="aspect-square w-full rounded-[1.5rem]" fetchPriority="high" /></div>
        </div>
      </div>
    </section>
    <section id="how-to-play" className="relative z-10 scroll-mt-24 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1278d8]">{c.how}</p>
        <h2 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">{c.rulesTitle}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/60">{c.rulesText}</p>
        <div className="mt-9 grid gap-5 md:grid-cols-3">{c.steps.map(([title, text], i) => <article key={title} className="rounded-[1.6rem] border border-black/8 bg-white p-7 shadow-soft"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f4ff] font-display text-xl font-black text-[#1278d8]">0{i + 1}</span><h3 className="mt-6 font-display text-2xl font-black">{title}</h3><p className="mt-3 leading-7 text-ink/65">{text}</p></article>)}</div>
      </div>
    </section>
    <section className="relative z-10 px-5 py-8 sm:px-8"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{c.panels.map(([title, text], i) => {
      const Icon = [Hand, Sparkles, Trophy][i];
      return <article key={title} className="rounded-[1.6rem] border border-black/8 bg-gradient-to-br from-[#eef7ff] to-white p-7"><Icon size={25} className="text-[#1278d8]" /><h2 className="mt-6 font-display text-2xl font-black leading-tight">{title}</h2><p className="mt-4 leading-7 text-ink/65">{text}</p></article>;
    })}</div></section>
    <section className="relative z-10 px-5 py-8 sm:px-8"><div className="mx-auto max-w-7xl rounded-[2rem] bg-[#18253a] p-8 text-white sm:p-12"><h2 className="max-w-2xl font-display text-4xl font-black leading-tight">{c.detailsTitle}</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">{c.details}</p><p className="mt-7 border-t border-white/15 pt-5 text-sm leading-6 text-white/65">{c.note}</p></div></section>
    <section className="relative z-10 px-5 py-10 sm:px-8"><div className="mx-auto max-w-5xl"><h2 className="mb-6 font-display text-3xl font-black">{c.faqTitle}</h2>{c.faq.map(([q, a]) => <details key={q} className="mb-3 rounded-2xl border border-black/8 bg-white p-6"><summary className="cursor-pointer text-lg font-bold">{q}</summary><p className="mt-4 leading-8 text-ink/65">{a}</p></details>)}</div></section>
    <BlockEscapeLegalLinks language={language} />
  </>;
}

const section = (title, ...paragraphs) => ({ title, paragraphs });
export const blockEscapePrivacySections = [
  section('1. Kapsam ve iletişim', 'Bu politika, AP Design tarafından geliştirilen Block Escape iPhone oyununun veri işleme uygulamalarını açıklar. Gizlilik sorularınız ve talepleriniz için theapdesign26@gmail.com adresinden bize ulaşabilirsiniz.', 'Block Escape hesap oluşturmayı gerektirmez. Uygulamada çevrimiçi oyuncu profili, liderlik tablosu veya bulut senkronizasyonu bulunmaz.'),
  section('2. Cihazda tutulan veriler', 'Tamamlanan seviyeler, en yüksek açık seviye, dil, tema, müzik, ses ve titreşim tercihleri ile reklam kaldırma durumu cihazda saklanır. Bu bilgiler ilerlemeyi ve tercihlerinizi hatırlamak için kullanılır. Devam eden bölümün hamle durumu kalıcı kaydedilmez.', 'Oyun; fotoğraflarınıza, rehberinize veya kişisel dosyalarınıza erişim istemez.'),
  section('3. Reklam hizmetleri', 'Block Escape banner, geçiş ve isteğe bağlı ödüllü reklamlar için Google Mobile Ads / AdMob kullanır. Reklam hizmetleri; IP adresi, cihaz ve uygulama bilgileri, reklam gösterimleri ve etkileşimleri gibi verileri işleyebilir. Takip izni verilmişse reklam tanımlayıcısı (IDFA) kullanılabilir.', 'Bu veriler reklam sunumu, ölçüm ve kötüye kullanımı önleme gibi amaçlarla hizmet sağlayıcı tarafından işlenebilir. Takip iznini reddetmeniz oyunu kullanmanıza engel olmaz; reklamlar IDFA olmadan sunulabilir.'),
  section('4. Takip izni ve analitik', 'Uygulama, iOS App Tracking Transparency sistem penceresiyle takip izni ister. Reklam istekleri sistem izin durumu belirlenene kadar bekler. Bu tercih iPhone Ayarlar > Gizlilik ve Güvenlik > Takip bölümünden yönetilebilir.', 'Firebase Analytics toplama başlangıçta kapalıdır ve mevcut sürümde yalnızca takip izni verildiğinde açılır. Analitik etkin olduğunda uygulama kullanımı ve teknik etkileşim verileri deneyimi değerlendirmek amacıyla işlenebilir. Takip reddedildiğinde veya kısıtlandığında analitik toplama kapalı kalır.'),
  section('5. İnternet bağlantısı kontrolü', 'Oynamak için internet bağlantısı gereklidir. Uygulama, bağlantıyı doğrulamak için Apple veya Google bağlantı kontrol uç noktalarına HTTPS istekleri gönderir. Bu istekler sırasında IP adresi gibi standart ağ bilgileri ilgili hizmete iletilir. Reklam kaldırma satın alımı bağlantı gereksinimini kaldırmaz.'),
  section('6. Satın alma verileri', 'Reklam kaldırma satın alımı Apple App Store ve StoreKit üzerinden yürütülür. Uygulama, satın alma yetkisini doğrulamak ve geri yüklemek için işlem ve hak bilgilerini işler; ödeme kartı bilgilerinize erişmez.', 'Satın alma kayıtları Apple tarafından kendi politikaları kapsamında saklanır. Satın alımları uygulama ayarlarından geri yüklemeyi deneyebilirsiniz.'),
  section('7. Paylaşım, saklama ve veri talepleri', 'Reklam, analitik, bağlantı doğrulama ve satın alma işlemlerinde Google ve Apple hizmetleri kullanılır. Bu sağlayıcılar verileri kendi politikaları kapsamında ve bulunduğunuz ülkenin dışında işleyebilir. Uygulamada bir oyuncu hesabı sunucusu bulunmaması, üçüncü taraf hizmetlerinin veri işlemediği anlamına gelmez.', 'Yerel oyun verileri uygulama kaldırıldığında silinebilir; cihaz yedekleri ve Apple satın alma kayıtları ayrı kalabilir. Üçüncü taraf verilerinin saklama süresi ilgili sağlayıcının politikasına bağlıdır.', 'Uygulanabilir mevzuat kapsamında erişim, düzeltme, silme veya itiraz taleplerinizi theapdesign26@gmail.com adresine iletebilirsiniz. Talebin niteliğine göre sizi ilgili hizmet sağlayıcıya yönlendirebiliriz.'),
  section('8. Çocukların gizliliği', 'Oyun kişisel profil bilgisi talep etmez ve çocuklardan bilerek kişisel bilgi toplamayı amaçlamaz. Çocuğunuza ilişkin bir veri işleme endişeniz varsa bizimle iletişime geçebilirsiniz. Reklam ve satın alma izinleri cihaz ve Apple hesabı ayarlarından yönetilebilir.'),
  section('9. Değişiklikler', 'Veri işleme uygulamaları değiştiğinde bu politika güncellenebilir. Güncel metnin tarihi sayfanın başında belirtilir. Bu metin Block Escape uygulamasını kapsar; web sitesinde kullanılan hizmetler ayrı veri işleme süreçlerine sahip olabilir.'),
];

export const blockEscapeTermsSections = [
  section('1. Kullanım ve kapsam', 'Bu şartlar, AP Design tarafından sunulan Block Escape oyununun kullanımını düzenler. Uygulamayı kullanmadan önce şartları inceleyiniz. Kabul etmiyorsanız uygulamayı kullanmayınız. İletişim: theapdesign26@gmail.com.'),
  section('2. Oyun kuralları', 'Block Escape, blokları yalnızca üzerlerindeki ok yönünde çıkararak tahtayı temizlemeye dayalı bir mantık bulmacasıdır. Başka bir bloğa çarpan hamle başarısız olur ve bir can azaltır. Bloklar oyun sırasında serbestçe sürüklenemez veya döndürülemez.', 'Her deneme 3 canla başlar. İpuçları ve ödüller oyun kurallarına bağlıdır; gerçek para veya nakit karşılığı taşımaz. Son blok çıkarıldığında bir sonraki seviye açılır.'),
  section('3. Cihaz, bağlantı ve kayıt', 'Oyun iOS 17 veya sonraki sürümleri kullanan uyumlu iPhone cihazları ve internet bağlantısı gerektirir. Bağlantı kesildiğinde oyun bağlantı yeniden doğrulanana kadar durur. Reklam kaldırma satın alımı bu gereksinimi değiştirmez. İnternet hizmeti ücretleri operatörünüze bağlıdır.', 'Tamamlanan seviyeler ve tercihler yerelde tutulur. Hesap veya bulut senkronizasyonu yoktur; devam eden bölümün hamle durumu kalıcı kaydedilmez. Uygulamanın silinmesi veya cihaz değişikliği ilerleme kaybına yol açabilir.'),
  section('4. Reklamlar ve ödüller', 'Ücretsiz kullanımda banner ve geçiş reklamları gösterilebilir. İsteğe bağlı ödüllü reklamlar ek can veya ipucu sağlayabilir. Ödül, reklam servisinin başarılı tamamlama sonucu bildirmesine bağlıdır; reklam bulunamaması veya teknik hata halinde ödül sağlanamayabilir.'),
  section('5. Satın alma ve geri yükleme', 'Reklam kaldırma ürünü Apple App Store üzerinden sunulur; geçerli fiyat ve satın alma bilgileri satın alma ekranında gösterilir. Satın alma banner ve geçiş reklamlarını kaldırır.', 'Satın alımlar Apple hesabı üzerinden yürütülür; AP Design kart bilgilerinizi almaz. Geri yükleme uygulama ayarlarından başlatılabilir. İade talepleri Apple üzerinden değerlendirilir. Yasal tüketici haklarınız saklıdır.'),
  section('6. Kullanım hakkı ve fikri mülkiyet', 'Uygulama kişisel eğlence amacıyla kullanımınıza sunulur. Block Escape yazılımı, markası, görselleri, sesleri ve metinleri AP Design veya ilgili hak sahiplerine aittir.', 'Uygulamayı hukuka aykırı kullanmamalı, satın alma ve reklam kontrollerini aşmaya veya hizmetin teknik işleyişini bozmaya çalışmamalısınız. Yasanın açıkça izin verdiği durumlar dışında içerikleri izinsiz kopyalayamaz veya dağıtamazsınız.'),
  section('7. Güncellemeler ve kullanılabilirlik', 'Oyun kuralları, seviye dengesi, görünüm ve teknik özellikler güncellemelerle değişebilir. Reklam ve mağaza hizmetlerinin kullanılabilirliği üçüncü taraflara bağlıdır. Kesintisiz veya hatasız çalışma garantisi verilmez; kanunen sağlanması gereken hak ve güvenceler saklıdır.'),
  section('8. Sorumluluk ve yasal haklar', 'AP Design, uygulanabilir hukukun izin verdiği ölçüde cihaz, bağlantı veya üçüncü taraf kesintilerinden doğan oyun ilerlemesi kayıplarından sorumlu tutulamaz. Bu şartlar, sınırlandırılması veya kaldırılması mümkün olmayan sorumlulukları ve zorunlu tüketici haklarını ortadan kaldırmaz.'),
  section('9. Gizlilik ve değişiklikler', 'Verilerin işlenmesine ilişkin açıklamalar Block Escape Gizlilik Politikası sayfasında yer alır. Bu şartların güncel sürümü bu sayfada yayımlanır; önemli değişikliklerde yürürlükteki kuralların gerektirdiği bilgilendirme yapılır.'),
];

export function BlockEscapeLegalReferences({ type }) {
  return <div className="relative z-10 mx-auto max-w-5xl px-5 py-4 text-sm leading-8 text-ink/65">
    <ShieldCheck className="mb-2 text-[#1278d8]" size={22} />
    {type === 'privacy' ? <div className="flex flex-wrap gap-x-6"><a className="underline" href="https://policies.google.com/privacy?hl=tr">Google Gizlilik Politikası</a><a className="underline" href="https://www.apple.com/legal/privacy/tr/">Apple Gizlilik Politikası</a><a className="underline" href="https://support.apple.com/tr-tr/102420">Apple takip izinleri</a></div> : <a className="underline" href="https://support.apple.com/tr-tr/118223">Apple satın alma ve iade desteği</a>}
  </div>;
}
