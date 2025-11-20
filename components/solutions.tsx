import { Button } from "@/components/ui/button"
import { ArrowRight, Satellite, Ruler, Plane, BrainCircuit } from 'lucide-react'

const solutions = [
  {
    id: "pasturometro",
    title: "Pasturometro",
    description:
      "Dispositivo de medición de alta precisión para registrar la altura y densidad del pasto en tiempo real.",
    icon: Ruler,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: "satelital",
    title: "Pastech Satelital",
    description:
      "Análisis de imágenes satelitales para monitorear grandes extensiones de terreno y detectar anomalías.",
    icon: Satellite,
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    id: "dron",
    title: "Pastech Dron",
    description: "Relevamiento aéreo detallado para zonas de difícil acceso y mapeo de alta resolución.",
    icon: Plane,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    id: "inteligente",
    title: "Pastoreo Inteligente",
    description: "Algoritmos de IA que sugieren rotaciones óptimas basadas en datos históricos y actuales.",
    icon: BrainCircuit,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
]

export function Solutions() {
  return (
    <section id="soluciones" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestras Soluciones</h2>
          <p className="text-muted-foreground text-lg">
            Herramientas integradas para cada etapa del ciclo productivo, desde la medición hasta la toma de decisiones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg ${solution.bg} flex items-center justify-center mb-4`}>
                <solution.icon className={`w-6 h-6 ${solution.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{solution.description}</p>
              <Button variant="link" className="p-0 h-auto text-white hover:text-primary group-hover:translate-x-1 transition-transform">
                Saber más <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
