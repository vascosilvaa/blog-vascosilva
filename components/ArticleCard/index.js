import React from 'react';
import Link from 'next/link'

import { StyledCard, StyledCardImage, StyledCardTitle, StyledCardSubtitle, StyledCardDescription, StyledCardSocial } from './articleCardComponents'

const ArticleCard = ({ id, title, subtitle, img }) => {
  return (
    <Link href={`/article/${id}`}>
      <StyledCard className="mb-5">
        <StyledCardImage img={img} />
        <StyledCardDescription>
          <StyledCardTitle>{title}</StyledCardTitle>
          <StyledCardSubtitle className="mt-4">{subtitle}</StyledCardSubtitle>
          <StyledCardSocial>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google-plus-g"></i>
          </StyledCardSocial>
        </StyledCardDescription>
      </StyledCard>
    </Link>
  )
};

export default ArticleCard;