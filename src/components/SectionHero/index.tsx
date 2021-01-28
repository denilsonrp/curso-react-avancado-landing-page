import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import { getImageUrl } from 'utils/getImageUrl'
import Container from 'components/Container'
import { ImageProps, HeaderProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type Props = {
  logo: ImageProps
  header: HeaderProps
}

const SectionHero = ({
  logo,
  header: {
    title,
    description,
    button: { label, url: buttonUrl },
    image: { alternativeText, url: imageUrl }
  }
}: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.ButtonWrapper>
            <Button href={buttonUrl} onClick={onClick} wide>
              {label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image src={getImageUrl(imageUrl)} alt={alternativeText} />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
