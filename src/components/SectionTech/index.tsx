import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'
import { SectionTechsProps } from 'types/api'

const SectionTech = ({ title, techIcons }: SectionTechsProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ title, icon: { url } }) => (
          <S.Icon key={title}>
            <S.Icons src={getImageUrl(url)} alt={title} loading="lazy" />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
