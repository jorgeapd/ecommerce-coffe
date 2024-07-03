"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      JorgeDev
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Despierta tus sentidos, disfruta lo auténtico. Calidad en cada taza, frescura en cada sorbo.Revisa nuestra web lleno de productos para ti!.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu informacion, tus pedidos y mucho mas.
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Seccion dedicada a promociones y descuentos especiales.
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Productos como tazas, molinillos, premisas, etc.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/accesorios" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList

const components: { title: string; href: string; description: string }[] = [
    {
      title: "Cafe Grano",
      href: "/category/grano",
      description:
        "El café de grano es café tostado en su forma entera, ofreciendo la máxima frescura y calidad. Disponible en variedades Arábica y Robusta, los granos de café pueden tener distintos niveles de tostado (claro, medio y oscuro) que afectan su sabor y aroma. Al moler los granos justo antes de preparar, se obtiene una taza de café más aromática y sabrosa, ideal para los amantes del café que buscan una experiencia auténtica y personalizada.",
    },  
    {
      title: "Cafe molido",
      href: "/category/molido",
      description:
        "El café molido es café tostado que ha sido triturado para facilitar su preparación. Disponible en variedades Arábica y Robusta, el café molido ofrece una conveniente y rápida manera de disfrutar de una taza de café. Con distintos niveles de tostado (claro, medio y oscuro), puedes elegir el perfil de sabor que prefieras. Ideal para aquellos que buscan una solución práctica sin sacrificar calidad y sabor en su café diario.",
    },
    {
      title: "Cafe capsula",
      href: "/category/capsula",
      description:
        "El café en cápsula es una forma conveniente y rápida de disfrutar una taza de café de alta calidad. Cada cápsula contiene una porción de café tostado y molido, sellada para preservar su frescura y sabor. Disponible en variedades Arábica y Robusta, y en distintos niveles de tostado (claro, medio y oscuro), el café en cápsula ofrece una amplia gama de perfiles de sabor. Ideal para aquellos que buscan simplicidad y consistencia en cada taza.",
    },
  ]
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

