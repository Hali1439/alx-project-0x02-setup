// interfaces/index.ts

/**
 * Interface for Card component props
 */
export interface CardProps {
  title: string
  content: string
}

/**
 * Interface for Button component props
 */
export interface ButtonProps {
  size: 'small' | 'medium' | 'large'
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full'
  children: React.ReactNode
  onClick?: () => void
}

/**
 * Interface for PostCard component props
 */
export interface PostProps {
  title: string
  body: string
  userId: number
}

/**
 * Interface for UserCard component props
 */
export interface UserProps {
  id: number
  name: string
  email: string
  address: {
    street: string
    city: string
  }
}
