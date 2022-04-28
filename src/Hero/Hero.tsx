import React from 'react'
import clsx from 'clsx'
import styles from './Hero.module.css'
import {LinkButton} from '../LinkButton'
import {Heading} from '../Heading'
import {Text} from '../Text'

type Action = {
  text: string
  href: string
}

export type HeroProps = {
  heading: string | React.ReactElement
  description?: string | React.ReactElement
  primaryAction: Action
  secondaryAction?: Action
  align?: 'start' | 'center'
  size?: 'small' | 'large'
}

export function Hero({
  heading,
  description,
  primaryAction,
  secondaryAction,
  align = 'start',
  size = 'large'
}: HeroProps) {
  return (
    <div className={clsx(styles.Hero, styles[`Hero--align-${align}`], styles[`Hero--size-${size}`])}>
      <Heading className={styles['Hero-heading']}>{heading}</Heading>
      {description ? (
        <Text className={styles['Hero-description']} as="p" size="500">
          {description}
        </Text>
      ) : null}
      <div className={styles['Hero-actions']}>
        <LinkButton variant="primary" href={primaryAction.href}>
          {primaryAction.text}
        </LinkButton>
        {secondaryAction ? (
          <LinkButton variant="secondary" href={secondaryAction.href}>
            {secondaryAction.text}
          </LinkButton>
        ) : null}
      </div>
    </div>
  )
}
