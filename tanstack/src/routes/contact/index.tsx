import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <h1>Contact Page</h1>
}