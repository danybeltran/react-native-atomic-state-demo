import { NavigationProp } from "@react-navigation/native"

export type withNavigation<T = {}> = {
  navigation: NavigationProp<any>
} & T

export type treatmentType = {
  nombre: string
  sintomas: string[]
  precio: number
  indicaciones: string[]
  contraindicaciones: string[]
}
