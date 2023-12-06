import { useSession, signIn, signOut } from "next-auth/react"
export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Logado como {session.user.name} <br />
        <button onClick={() => signOut()}>Deslogar</button>
      </>
    )
  }
  return (
    <>
      Não está logado <br />
      <button onClick={() => signIn()}>Logar</button>
    </>
  )
}