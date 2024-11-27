import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Ein kleiner Laden voller Liebe und Glück
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Versteckt, aber unvergesslich – der Falafel Warb Hamburg ist mehr als nur ein Imbiss. 
              Es ist ein Ort der Freude, der Liebe und des Genusses. Hier wird jeder Moment zelebriert, 
              während wir unsere frischen Spezialitäten für dich zubereiten.
            </p>
            <p className="text-lg leading-relaxed">
              Egal, ob Falafel, Bulgur oder Chicken Wrap – alles, was wir tun, machen wir mit Leidenschaft. 
              Komm vorbei und erlebe es selbst!
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 relative">
              <Image
                src="/images/owner.jpg"
                alt="Inhaber von Falafel Warb"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <blockquote className="bg-white p-6 rounded-lg shadow-lg absolute -bottom-8 -left-8 max-w-md">
              <p className="text-lg italic">
                "Ich bin jemand, der nie stillsteht. Kreativität ist mein Motor, Freiheit mein Treibstoff."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
