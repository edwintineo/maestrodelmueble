import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, Shield, Heart, Target } from 'lucide-react'
import Link from "next/link"
import type { Metadata } from "next"
import JsonLd from "@/app/schema"

export const metadata: Metadata = {
  title: "Quiénes Somos | Mueblería Artesanal con 15+ Años en Santiago - El Maestro del Mueble",
  description: "Conoce la historia, valores y equipo de El Maestro del Mueble. Más de 15 años diseñando y fabricando muebles de madera a medida en Santiago.",
  alternates: {
    canonical: "/quienes-somos",
  },
}

export default function QuienesSomosPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Quiénes Somos - El Maestro del Mueble",
    "description": "Conoce la historia, valores y equipo de El Maestro del Mueble. Más de 15 años diseñando y fabricando muebles de madera a medida en Santiago.",
    "publisher": {
      "@type": "Organization",
      "name": "El Maestro del Mueble",
      "url": "https://www.maestrodelmueble.cl"
    }
  }

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Pasión por la Calidad",
    description: "Cada proyecto es una obra de arte que refleja nuestro compromiso con la excelencia.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Trabajo en Equipo",
    description: "Colaboramos estrechamente contigo para hacer realidad tu visión.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Confianza y Transparencia",
    description: "Construimos relaciones duraderas basadas en la honestidad y el respeto.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Enfoque al Cliente",
    description: "Tu satisfacción es nuestra prioridad número uno en cada proyecto.",
  },
]

const team = [
  {
    name: "Víctor Maestro",
    position: "Fundador y Maestro Mueblista",
    experience: "15+ años",
    description: "Especialista en diseño y fabricación de muebles con amplia experiencia en cocinas integrales.",
    image: "/images/victor-maestro-new.webp",
  },
  {
    name: "Carlos Hernández",
    position: "Maestro en Restauración",
    experience: "12+ años",
    description: "Experto en técnicas tradicionales de restauración y acabados especializados.",
    image: "/images/chilean-man-49-years-old.png", // Updated image
  },
  {
    name: "Ana Morales",
    position: "Diseñadora de Interiores",
    experience: "8+ años",
    description: "Especialista en optimización de espacios y diseño funcional de muebles.",
    image: "/images/Maria-Silva.png",
  },
]

const milestones = [
  {
    year: "2008",
    title: "Fundación de la Empresa",
    description: "Víctor inicia su emprendimiento con un pequeño taller en Santiago.",
  },
  {
    year: "2012",
    title: "Expansión del Equipo",
    description: "Incorporamos especialistas en diferentes áreas de la mueblería.",
  },
  {
    year: "2016",
    title: "100 Proyectos Completados",
    description: "Alcanzamos nuestro primer centenar de proyectos exitosos.",
  },
  {
    year: "2020",
    title: "Modernización del Taller",
    description: "Invertimos en nueva maquinaria y tecnología de punta.",
  },
  {
    year: "2023",
    title: "Reconocimiento Regional",
    description: "Nos consolidamos como referentes en mueblería en Santiago.",
  },
]

return (
  <main>
    <JsonLd data={aboutPageSchema} />
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Quiénes Somos — Mueblería Artesanal en Santiago</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Somos una empresa familiar dedicada a crear muebles únicos y funcionales con más de 15 años de experiencia
          en el rubro de la mueblería.
        </p>
      </div>
    </section>

    {/* About Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
            <p className="text-lg text-gray-600 mb-6">
              El Maestro del Mueble nació en 2008 como el sueño de Víctor, un apasionado artesano que decidió
              convertir su amor por la madera en una empresa dedicada a crear muebles únicos y funcionales.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Lo que comenzó como un pequeño taller familiar, hoy se ha convertido en una empresa reconocida en
              Santiago por la calidad de nuestros trabajos y el compromiso con nuestros clientes.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Cada mueble que creamos lleva consigo años de experiencia, técnicas tradicionales y la innovación
              necesaria para adaptarnos a las necesidades modernas de nuestros clientes.
            </p>
            <Button size="lg" asChild>
              <Link href="/contacto">Conoce Más Sobre Nosotros</Link>
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/images/ARTESANO-TRABAJANDO-1.jpeg" // Using one of the new artisan images
              alt="Taller de carpintería"
              width={600}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Valores</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Los principios que guían cada uno de nuestros proyectos y definen nuestra forma de trabajar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-orange-500 hover:border-orange-600">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce a los profesionales que hacen posible cada uno de nuestros proyectos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-orange-500 hover:border-orange-600">
              <CardContent className="p-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-gray-500 mb-3">{member.experience} de experiencia</p>
                <p className="text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline Section */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestra Trayectoria</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Los hitos más importantes en nuestro camino hacia la excelencia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="hover:shadow-lg transition-shadow border-2 border-orange-500 hover:border-orange-600">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Logros</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Award className="w-12 h-12 text-orange-500 mb-4" />
            <div className="text-4xl font-bold text-gray-800 mb-2">150+</div>
            <p className="text-gray-600">Proyectos Completados</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 text-orange-500 mb-4" />
            <div className="text-4xl font-bold text-gray-800 mb-2">15+</div>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 text-orange-500 mb-4" />
            <div className="text-4xl font-bold text-gray-800 mb-2">100%</div>
            <p className="text-gray-600">Clientes Satisfechos</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-orange-500 mb-4" />
            <div className="text-4xl font-bold text-gray-800 mb-2">2 Años</div>
            <p className="text-gray-600">Garantía en Trabajos</p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="hover:shadow-lg transition-shadow border-2 border-orange-500 hover:border-orange-600">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 text-lg">
                Crear muebles únicos y funcionales que transformen los espacios de nuestros clientes, combinando
                técnicas tradicionales con diseños modernos y materiales de la más alta calidad.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2 border-orange-500 hover:border-orange-600">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Visión</h3>
              <p className="text-gray-600 text-lg">
                Ser reconocidos como la empresa líder en mueblería personalizada en Santiago, destacando por nuestra
                innovación, calidad excepcional y compromiso con la satisfacción del cliente.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-orange-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Quieres Ser Parte de Nuestra Historia?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Permítenos crear el mueble perfecto para tu hogar y formar parte de nuestros próximos proyectos exitosos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contacto">Iniciar Mi Proyecto</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
            asChild
          >
            <Link href="/portafolio">Ver Nuestros Trabajos</Link>
          </Button>
        </div>
      </div>
    </section>
  </main>
)
}
