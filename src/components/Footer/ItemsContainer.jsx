import Item from "./Item"

export default function ItemsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-6 sm:px-8 px-5 py-16 mx-auto">
      <Item
        githubLink="https://github.com/Bolphunga"
        linkedinLink="https://www.linkedin.com/in/ahmed-djebnoune-ab640b111/"
        title="Ahmed Djebnoune"
      />
      <Item
        githubLink="https://github.com/Emybel"
        linkedinLink="https://www.linkedin.com/in/imene-belaid/"
        title="Imane Belaid"
      />
      <Item
        githubLink="https://github.com/Lilicod"
        linkedinLink="https://www.linkedin.com/in/lilia-bendjeddou-705679256/"
        title="Lilia Bendjeddou"
      />
      <Item
        githubLink="https://github.com/darinetag"
        linkedinLink="https://www.linkedin.com/in/darine-fatma-tag/"
        title="Darine Tag"
      />
      <Item
        githubLink="https://github.com/RianeHemsas"
        linkedinLink=""
        title="Riane Hemsas"
      />
      <Item
        githubLink="https://github.com/mohamed-cheraitia"
        linkedinLink="https://www.linkedin.com/in/mohamed-ch-947939272/"
        title="Mohamed Cheraitia"
      />
    </div>
  )
}
