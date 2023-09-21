export type ButtonProps = {
  onClick: () => void
  label: string
  category?: 'blog' | 'project'
  active?: boolean
}