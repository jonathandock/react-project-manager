const initState = {
  projects: [
    {
      id: "5c91fd76ecadabb3359ec0bd",
      title: "id cupidatat",
      content: "Nisi irure occaecat sunt occaecat. Nisi sit cupidatat ullamco ullamco do est consectetur nulla cillum. Eiusmod proident officia id irure deserunt eu fugiat irure et enim.\r\nNisi laborum magna officia aliquip. Ex sit ut exercitation in Lorem occaecat exercitation adipisicing adipisicing labore irure ipsum nostrud eiusmod. Fugiat tempor sunt incididunt quis cupidatat nostrud cillum irure anim proident nulla.\r\nNisi dolor deserunt eiusmod nostrud eu voluptate consectetur aliqua elit sit ut pariatur voluptate excepteur. Nostrud fugiat mollit laborum laboris voluptate. Occaecat velit eu dolore aliquip quis aliqua qui ea.\r\n"
    },
    {
      id: "5c91fd7640b40de41b14c4d4",
      title: "dolore tempor",
      content: "Excepteur excepteur aliqua exercitation do consectetur culpa consectetur sunt laborum. Dolore nisi exercitation in commodo eiusmod labore elit aute do culpa dolore. Elit ullamco aute excepteur irure enim. Fugiat amet ullamco velit officia ex non laboris laboris pariatur ea sunt Lorem ut. Mollit quis velit cillum consequat occaecat nulla culpa occaecat. Minim aliquip elit anim quis Lorem incididunt tempor mollit dolor ipsum officia. Occaecat do qui fugiat cillum sit.\r\nNisi mollit do laboris pariatur labore. Qui et est culpa dolor mollit elit enim pariatur ipsum in. Mollit quis deserunt consequat ex. Ea culpa laboris nostrud mollit.\r\nLaborum magna ipsum nisi cillum cupidatat eu mollit cupidatat duis est anim enim. Veniam fugiat sint proident duis consequat pariatur culpa ea. In cillum enim nisi magna exercitation culpa aliqua dolore duis.\r\n"
    },
    {
      id: "5c91fd7678299ea610a520bd",
      title: "magna velit",
      content: "Officia nisi irure nulla cupidatat occaecat occaecat voluptate elit pariatur. Do incididunt velit amet culpa magna enim aute adipisicing. Ipsum fugiat cillum proident culpa officia id. Sit enim elit laborum et et ut. Irure consectetur dolor anim aliqua deserunt fugiat consectetur occaecat ipsum sint excepteur anim exercitation.\r\nElit consectetur Lorem adipisicing mollit et consequat voluptate voluptate aliquip exercitation dolore voluptate dolore. Pariatur laboris consectetur cillum officia reprehenderit eiusmod consectetur aliqua irure. Culpa consequat tempor ad aliqua duis et.\r\nEa adipisicing ad Lorem proident incididunt ad adipisicing. Mollit tempor anim culpa eiusmod est amet et excepteur. Dolore ullamco Lorem do eiusmod commodo esse dolor consectetur in exercitation laborum laborum laboris. Est duis ut cupidatat ad proident pariatur id duis. Exercitation consequat velit dolor quis officia cupidatat officia labore aliqua mollit eiusmod consequat sunt incididunt. Sit non deserunt aute commodo voluptate elit culpa in ut ad. Aliquip enim cupidatat ipsum dolore ea anim commodo sit est proident.\r\n"
    },
    {
      id: "5c91fd7600e14343c8280dfc",
      title: "velit tempor",
      content: "Nostrud aliquip irure id reprehenderit qui commodo proident exercitation qui. Aliquip fugiat non excepteur qui. Officia dolor dolore non et fugiat laborum. Anim eu cupidatat sunt ut eiusmod aliqua aliqua dolor sit ad do. Cupidatat aute est cupidatat labore sunt ipsum sit duis sint ipsum labore dolor mollit. Lorem minim veniam in cupidatat.\r\nTempor incididunt cupidatat irure officia eu labore magna culpa enim elit cupidatat ad amet. Tempor esse cupidatat adipisicing exercitation incididunt eiusmod incididunt. Id nisi ex occaecat qui cillum occaecat mollit aute. Commodo id cupidatat eu occaecat anim eu in. Est culpa ex cillum ex eu id. Excepteur ad minim velit qui ex est elit mollit officia laborum nisi consequat.\r\nCupidatat cupidatat excepteur id occaecat nulla commodo est eiusmod eiusmod. Velit eiusmod incididunt reprehenderit ad et adipisicing esse veniam labore pariatur. Proident ullamco dolor commodo nostrud cupidatat enim cillum sunt enim sit sint esse excepteur. Ad ut amet dolore in dolore Lorem dolor irure commodo ex enim mollit. Magna est ipsum in non mollit. Eu laborum labore amet mollit qui adipisicing nisi nulla exercitation veniam sunt consequat pariatur. Voluptate aliqua do mollit nulla labore consectetur cillum mollit.\r\n"
    },
    {
      id: "5c91fd76fdd65067f7a86212",
      title: "veniam mollit",
      content: "Nostrud magna cillum nostrud velit anim reprehenderit ad eiusmod. Excepteur aute minim ipsum cupidatat eu est tempor et. Occaecat adipisicing officia nostrud ea sint proident eu. Sunt ea ipsum Lorem commodo aliqua incididunt. Et commodo fugiat laboris irure ullamco duis nisi ex aliquip. Mollit amet ea elit consequat. Magna duis aliquip nisi quis mollit nisi occaecat nulla esse ipsum.\r\n"
    }
  ]
};

const projectReducer = (state = initState, action) => {

  switch (action.type) {

    case 'CREATE_PROJECT':
      console.log('CREATE_PROJECT', action.project);
      return state;
    
    case 'CREATE_PROJECT_ERROR':
      console.log('CREATE_PROJECT_ERROR', action.error);
      return state;
    
    default:
      return state;
    
  }
}

export default projectReducer;