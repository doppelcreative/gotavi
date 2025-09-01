import React from 'react'
import ServiceBanner from './service-banner.component'
import ServiceOffer from './service-offer.component'
import ServiceRepo from './service-repo.component'
import { TESTIMONIALS } from './service.constant'
import Hero from '@/common/components/hero-sec/hero-sec'

export default function ServicePage() {
  return (
    <>
        <Hero title="Services" />
        <ServiceOffer />
        <ServiceRepo />
    </>
  )
}
