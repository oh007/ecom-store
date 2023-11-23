

const About = () => {
    return (
      <>
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-800">Välkommen till Ikea+</h1>
          <p className="text-gray-600">Hemmet för Exklusiv Elegans och Tidlös Kvalitet</p>
        </header>
  
        <section className="flex flex-wrap">
          <div className="w-full md:w-1/2 bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Lyx och Kvalitet i Varje Detalj</h2>
            <p className="text-gray-600">På Ikea+ strävar vi efter att lyfta inredning till en ny nivå genom att erbjuda de mest exklusiva varorna som ger en unik touch till ditt hem. Vår kollektion är inte bara en serie möbler; det är en lyxig upplevelse där form möter funktion, och där varje detalj är noga utvald för att skapa en atmosfär av sofistikering och komfort.</p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src="/src/assets/images/ExamplePic-1.jpg" alt="Lyxig möbel" className="object-cover w-full h-full rounded-lg" />
          </div>
        </section>
  
        <section className="flex flex-wrap">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src="/src/assets/images/ExamplePic-2.jpg" alt="Exklusiv design" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Material av Högsta Klass</h2>
            <p className="text-gray-600">Vi på Ikea+ väljer noggrant material av högsta kvalitet för att säkerställa långvarig skönhet och hållbarhet. Från äkta läder till exklusiv sammet och hållbart skogad trä, varje material valdes med omsorg för att garantera en känsla av överflöd och miljövänlig design.</p>
          </div>
        </section>
  
        <section className="flex flex-wrap">
          <div className="w-full md:w-1/2 bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Unik Design för Varje Hem</h2>
            <p className="text-gray-600">Vår exklusiva kollektion är skapad för att passa olika stilar och smaker. Varje möbel är resultatet av en noggrant genomtänkt designprocess där form och funktion smälter samman för att skapa verkliga mästerverk. Oavsett om du letar efter elegans, modernitet eller en tidlös touch, har Ikea+ något som passar dig.</p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src="/src/assets/images/ExamplePic-3.jpg" alt="Unik design" className="object-cover w-full h-full rounded-lg" />
          </div>
        </section>
  
        <section className="flex flex-wrap">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src="/src/assets/images/ExamplePic-4.jpg" alt="Modulär flexibilitet" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Modulär Flexibilitet</h2>
            <p className="text-gray-600">För att möta olika behov och rumskonfigurationer erbjuder Ikea+ möbler med modulär flexibilitet. Våra möbler är utformade för att passa sömlöst in i olika miljöer, vilket ger dig möjligheten att skapa ditt eget personliga uttryck.</p>
          </div>
        </section>
  
        <section className="flex flex-wrap">
          <div className="w-full md:w-1/2 bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Hållbarhet och Ansvar</h2>
            <p className="text-gray-600">På Ikea+ omfamnar vi inte bara lyx och kvalitet utan även ett åtagande för hållbarhet och socialt ansvar. Vår kollektion reflekterar vår strävan efter att minimera påverkan på miljön och stödja ansvarsfulla produktionsmetoder.</p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src="/src/assets/images/ExamplePic-5.jpg" alt="Hållbarhet och ansvar" className="object-cover w-full h-full rounded-lg" />
          </div>
        </section>
  
        <footer className="text-center py-8">
          <p className="text-gray-600">Välkommen till Ikea+ där varje möbel är ett konstverk, och varje hem kan omvandlas till en plats av oöverträffad elegans och komfort. Utforska vårt exklusiva sortiment och låt din inredning bli en berättelse om din individuella stil och smak.</p>
        </footer>
      </>
    );
  };
  
  export default About;