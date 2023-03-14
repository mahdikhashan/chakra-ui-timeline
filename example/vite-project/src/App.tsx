/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-target-blank */
import * as React from 'react'
import './App.css'

import { Timeline, Element } from '../../../lib/index'
import { Box } from '@chakra-ui/react'

const SampleFirstElement = () => {
  return (
    <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <button>my-button</button>
    </>
  )
}

const SampleSecondElement = () => {
  return (
    <>
      <b>This is my element</b>
      <button>my-button</button>
    </>
  )
}

const elements = [
  { label: 'my-first-el', content: [<SampleFirstElement />] },
  {
    icon: undefined,
    label: 'my-second-el',
    content: [
      <SampleFirstElement />,
      <SampleSecondElement />,
      <SampleSecondElement />,
      <SampleSecondElement />,
    ],
  },
  { label: 'my-first-el', content: [<SampleSecondElement />] },
  { label: 'my-first-el', content: [<SampleSecondElement />] },
  { label: 'my-first-el', content: [<SampleFirstElement />] },
  {
    label: 'my-second-el',
    content: [
      <SampleFirstElement />,
      <SampleSecondElement />,
      <SampleSecondElement />,
      <SampleSecondElement />,
    ],
  },
  { label: 'my-first-el', content: [<SampleSecondElement />] },
  { label: 'my-first-el', content: [<SampleSecondElement />] },
  { label: 'my-first-el', content: [<SampleFirstElement />] },
  {
    label: 'my-second-el',
    content: [
      <SampleFirstElement />,
      <SampleSecondElement />,
      <SampleSecondElement />,
      <SampleSecondElement />,
    ],
  },
  { label: 'my-first-el', content: [<SampleSecondElement />] },
  { label: 'my-first-el', content: [<SampleSecondElement />] },
]

function App() {
  return (
    <Box minH="100vh" px="4">
      <Timeline marginX="1rem" variant="ltr">
        {elements.map((el) => (
          <Element icon={el?.icon} label={el?.label}>
            {el.content}
          </Element>
        ))}
      </Timeline>
    </Box>
  );
}

export default App
