import React from 'react'
import { CTabs, CNav, CNavLink, CNavItem, CTabContent, CTabPane, CContainer, CRow, CCol, CForm, CFormGroup,
    CLabel, CInput, CFormText, CInputRadio
} from './coreui/index'
import { CIcon } from '@coreui/icons-react';
import { cifAU } from '@coreui/icons';
import { NavMenu } from './NavMenu'
import './UserRegistre.css'

export const UserRegistre = () => {
    return (
    <>
    <NavMenu title={"User"} />
    <div className="containerTabs">
        <CTabs activeTab="userRegistry">
            <CNav variant="tabs">
                <CNavItem>
                <CNavLink data-tab="userRegistry">
                    User Registry
                </CNavLink>
                </CNavItem>
                <CNavItem>
                <CNavLink data-tab="profile">
                    Profile
                </CNavLink>
                </CNavItem>                
            </CNav>
            <CTabContent>
                <CTabPane data-tab="userRegistry">
                    <div className="paddContainer">

                        <CContainer fluid>
                        <CRow>
                            <CCol sm="12">
                            <CForm action="" method="post">
                                <CFormGroup>
                                    <CRow>
                                        <CCol sm="2" className="labelTitle">
                                            <CLabel htmlFor="nf-usermail">Username *</CLabel>
                                        </CCol>
                                        <CCol sm="4">
                                            <CInput
                                                type="text"
                                                id="nf-usermail"
                                                name="nf-usermail"
                                                placeholder="Enter Username.."                                        
                                            />
                                            <CFormText className="help-block">Please enter your username</CFormText>
                                        </CCol>
                                    </CRow>
                                    
                                    
                                </CFormGroup>
                                <CFormGroup>                                    
                                    <CRow>
                                        <CCol sm="2" className="labelTitle">
                                            <CLabel htmlFor="nf-fullname">Full name *</CLabel>
                                        </CCol>    
                                        <CCol sm="4">
                                            <CInput
                                                type="text"
                                                id="nf-firstname"
                                                name="nf-firstname"
                                                placeholder="First Name"                                        
                                            />
                                        </CCol>    
                                        <CCol sm="6">
                                            <CInput
                                                type="text"
                                                id="nf-lastname"
                                                name="nf-lastname"
                                                placeholder="Last Name"                                        
                                            />                                    
                                        </CCol>    
                                    </CRow>                                                                       
                                    
                                </CFormGroup>
                                <CFormGroup>
                                    <CRow>
                                        <CCol sm="2" className="labelTitle">
                                            <CLabel htmlFor="nf-email">Email *</CLabel>    
                                        </CCol>
                                        <CCol sm="10">
                                            <CInput
                                                type="email"
                                                id="nf-email"
                                                name="nf-email"
                                                placeholder="Enter Email.."
                                                autoComplete="email"
                                            />
                                            <CFormText className="help-block">Please enter your email</CFormText>    
                                        </CCol>
                                    </CRow>
                                                                        
                                </CFormGroup>
                                <CFormGroup>
                                    <CRow>
                                        <CCol sm="2" className="labelTitle">
                                            <CLabel htmlFor="nf-phone">Phone Number</CLabel>
                                        </CCol>    
                                        <CCol sm="4">
                                            <CInput
                                                type="tel"
                                                id="nf-phone"
                                                name="nf-phone"
                                                placeholder="(000) 000-0000"                                        
                                            />
                                        </CCol> 
                                        <CCol sm="2" className="labelTitle">
                                            <CLabel htmlFor="nf-fullname">Mobile Phone *</CLabel>
                                        </CCol>    
                                        <CCol sm="4">
                                            <CInput
                                                type="tel"
                                                id="nf-mobilephone"
                                                name="nf-mobilephone"
                                                placeholder="(000) 000-0000"                                        
                                            />
                                        </CCol> 
                                    </CRow>
                                </CFormGroup>
                                <CFormGroup>
                                    <CRow>
                                        <CCol sm="2" className="labelTitle">
                                            <CLabel htmlFor="nf-password">Password</CLabel>
                                        </CCol>
                                        <CCol sm="8">
                                            <CInput
                                                type="password"
                                                id="nf-password"
                                                name="nf-password"
                                                placeholder="Enter Password.."
                                            />                                            
                                        </CCol>
                                    </CRow>
                                                                        
                                </CFormGroup>
                                <CFormGroup>
                                    <CRow>
                                        <CCol sm="2" className="labelTitle">
                                            <CLabel htmlFor="nf-re-password">Confirm Password</CLabel>
                                        </CCol>
                                        <CCol sm="8">
                                            <CInput
                                                type="password"
                                                id="nf-re-password"
                                                name="nf-re-password"
                                                placeholder="Type your Password again"
                                                
                                            />
                                            <CFormText className="help-block">Please enter your password</CFormText>
                                        </CCol>
                                    </CRow>
                                                                        
                                </CFormGroup>
                                <CFormGroup>
                                    <CRow>
                                        <CCol sm="2" className="labelTitle">
                                            <CLabel htmlFor="nf-expire">Expire</CLabel>
                                        </CCol>    
                                        <CCol sm="4">                                            
                                            <CInputRadio name="expire" label="Yes" />
                                            <CInputRadio name="expire" label="No" />
                                        </CCol> 
                                        <CCol sm="2" className="labelTitle">
                                            <CLabel htmlFor="nf-fullname">Expire Date</CLabel>
                                        </CCol>    
                                        <CCol sm="3">
                                            <CInput
                                                type="date"
                                                id="nf-expiredate"
                                                name="nf-expiredate"                                                
                                            />
                                        </CCol> 
                                        <CCol sm="1">
                                            {/* <CIcon size={'sm'} name={'cilSettings'} />    */}
                                            <CIcon name="cil-list" size="2xl"/>
                                        </CCol> 
                                    </CRow>
                                </CFormGroup>
                            </CForm>
                            </CCol>
                        </CRow>
                        </CContainer>

                    </div>
                </CTabPane>
                <CTabPane data-tab="profile">
                456
                </CTabPane>
                
            </CTabContent>
        </CTabs>
    </div>
    </>
    )
}