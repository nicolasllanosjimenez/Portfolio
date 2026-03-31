import './GithubLink.css'

export default function GithubLink({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="github-link"
      aria-label="View on GitHub"
    >
      <><img src="/assets/github.svg" alt="GitHub" className="github-link__icon" /><span>View on GitHub</span></>
    </a>
  )
}