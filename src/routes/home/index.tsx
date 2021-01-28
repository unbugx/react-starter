import React from 'react';
import { Layout } from 'components/Layout/Layout';
import { ROUTE } from 'constants/routes';
import { Block } from 'components/blocks/Block/Block';
import { ALIGN } from 'constants/index';

export default {
  path: '',
  action: () => ({
    name: ROUTE.HOME,
    component: (
      <Layout>
        <Block
          id='1'
          type='textGrid'
          theme='orangeTheme'
          elements={[
            {
              id: '1',
              elements: {
                image: {
                  value: {
                    url: '/assets/images/690x388.jpg',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                title: {
                  value: {
                    content: 'Lizard 1',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                text: {
                  value: {
                    content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging '
                      + 'across all continents except Antarctica',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                primary: {
                  value: {
                    content: 'Primary',
                    url: 'http://ya.ru',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                secondary: {
                  value: {
                    content: 'Secondary',
                    url: '',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
              },
            },
            {
              id: '2',
              elements: {
                image: {
                  value: {
                    url: '/assets/images/690x388.jpg',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                title: {
                  value: {
                    content: 'Lizard 1',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                text: {
                  value: {
                    content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging '
                      + 'across all continents except Antarctica',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                primary: {
                  value: {
                    content: 'Primary',
                    url: 'http://ya.ru',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                secondary: {
                  value: {
                    content: 'Secondary',
                    url: '',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
              },
            },
            {
              id: '3',
              elements: {
                image: {
                  value: {
                    url: '/assets/images/690x388.jpg',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                title: {
                  value: {
                    content: 'Lizard 1',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                text: {
                  value: {
                    content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging '
                      + 'across all continents except Antarctica',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                primary: {
                  value: {
                    content: 'Primary',
                    url: 'http://ya.ru',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                secondary: {
                  value: {
                    content: 'Secondary',
                    url: '',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
              },
            },
            {
              id: '4',
              elements: {
                image: {
                  value: {
                    url: '/assets/images/690x388.jpg',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                title: {
                  value: {
                    content: 'Lizard 1',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                text: {
                  value: {
                    content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging '
                      + 'across all continents except Antarctica',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                primary: {
                  value: {
                    content: 'Primary',
                    url: 'http://ya.ru',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
                secondary: {
                  value: {
                    content: 'Secondary',
                    url: '',
                  },
                  interface: {
                    align: ALIGN.left,
                    visibility: true,
                  },
                },
              },
            },
          ]}
        />
        <Block
          id='2'
          type='text'
          elements={{
            image: {
              value: {
                url: '/assets/images/690x388.jpg',
              },
              interface: {
                align: ALIGN.left,
                visibility: true,
              },
            },
            title: {
              value: {
                content: 'Lizard 1',
              },
              interface: {
                align: ALIGN.left,
                visibility: true,
              },
            },
            text: {
              value: {
                content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging '
                  + 'across all continents except Antarctica',
              },
              interface: {
                align: ALIGN.left,
                visibility: true,
              },
            },
            primary: {
              value: {
                content: 'Primary',
                url: 'http://ya.ru',
              },
              interface: {
                align: ALIGN.left,
                visibility: true,
              },
            },
            secondary: {
              value: {
                content: 'Secondary',
                url: '',
              },
              interface: {
                align: ALIGN.left,
                visibility: true,
              },
            },
          }}
        />
        <Block
          id='3'
          type='cover'
          isReverse={false}
          elements={{
            image: {
              value: {
                url: '/assets/images/690x388.jpg',
              },
              interface: {
                align: ALIGN.left,
                visibility: true,
              },
            },
            text: {
              value: {
                content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging '
                  + 'across all continents except Antarctica',
              },
              interface: {
                align: ALIGN.left,
                visibility: true,
              },
            },
            primary: {
              value: {
                content: 'Primary',
                url: 'http://ya.ru',
              },
              interface: {
                align: ALIGN.left,
                visibility: true,
              },
            },
            secondary: {
              value: {
                content: 'Secondary',
                url: '',
              },
              interface: {
                align: ALIGN.left,
                visibility: true,
              },
            },
          }}
        />
        <Block
          id='4'
          type='cover'
          isReverse
          elements={{
            image: {
              value: {
                url: '/assets/images/690x388.jpg',
              },
              interface: {
                align: ALIGN.left,
                visibility: true,
              },
            },
            text: {
              value: {
                content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging '
                  + 'across all continents except Antarctica',
              },
              interface: {
                align: ALIGN.left,
                visibility: true,
              },
            },
            primary: {
              value: {
                content: 'Primary',
                url: 'http://ya.ru',
              },
              interface: {
                align: ALIGN.left,
                visibility: true,
              },
            },
            secondary: {
              value: {
                content: 'Secondary',
                url: '',
              },
              interface: {
                align: ALIGN.left,
                visibility: true,
              },
            },
          }}
        />
      </Layout>
    ),
  }),
};
