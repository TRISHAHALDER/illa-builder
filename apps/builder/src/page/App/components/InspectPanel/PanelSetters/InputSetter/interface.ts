import { ReactNode } from "react"
import { BaseSetter } from "@/page/App/components/InspectPanel/PanelSetters/interface"
import { VALIDATION_TYPES } from "@/utils/validationFactory"

export interface BaseInputSetterProps extends BaseSetter {
  placeholder?: string
  expectedType?: VALIDATION_TYPES
  value?: string
  wrappedCodeFunc?: (code: string) => string
}

export interface EditableInputSetterProps extends BaseInputSetterProps {
  icon?: ReactNode
}

// export interface InputWithSelectSetterProps
//   extends BaseSetter,
//     PanelLabelProps {
//   options?: string[] | number[] | SelectOptionObject[]
//   expectedType: VALIDATION_TYPES[]
//   value: string[]
//   placeholder?: string
// }