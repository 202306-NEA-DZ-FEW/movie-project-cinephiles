import Item from "./Item"

export default function ItemsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-6 sm:px-8 px-5 py-16 mx-auto">
      <Item githubLink="" linkedinLink="" title="Ahmed Djebnoune" />
      <Item
        githubLink="https://github.com/Emybel"
        linkedinLink="https://www.linkedin.com/in/imene-belaid/"
        title="Iman Belaid"
      />
      <Item
        githubLink="https://github.com/Lilicod"
        linkedinLink="https://www.linkedin.com/in/lilia-bendjeddou-705679256/"
        title="Lilia Bendjeddou"
      />
      <Item githubLink="" linkedinLink="" title="Darin Fatma Tag" />
      <Item githubLink="" linkedinLink="" title="Riane Hemsas" />
      <Item githubLink="" linkedinLink="" title="Mohamed Cheraitia" />
    </div>
  )
}
