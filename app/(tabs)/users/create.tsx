import { View, Text } from 'react-native'
import React from 'react'
import AppLayout from '@/components/layouts/app-layout'
import { FormControl, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control'
import { Input, InputField } from '@/components/ui/input'
import {
    Select,
    SelectTrigger,
    SelectInput,
    SelectPortal,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicatorWrapper,
    SelectDragIndicator,
    SelectItem,
  } from "@/components/ui/select"
import { Button, ButtonText } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function create() {
    return (
        <AppLayout>
            <Card className='p-0 rounded-lg border border-gray-200'>
                <View className='border-b p-4 border-gray-200'>
                    <Text className='text-xl font-semibold'>Create User</Text>
                    <Text className='text-sm text-gray-400'>This is a form to create a new user</Text>
                </View>
                <View className='p-4'>
                <FormControl>
                    <View className='mb-4'>
                        <FormControlLabel>
                            <FormControlLabelText>Name</FormControlLabelText>
                        </FormControlLabel>
                        <Input className='bg-white rounded-lg border-gray-200'>
                            <InputField type='text' placeholder='enter a full name..'/>
                        </Input>
                    </View>
                    <View className='mb-4'>
                        <FormControlLabel>
                            <FormControlLabelText>Email</FormControlLabelText>
                        </FormControlLabel>
                        <Input className='bg-white rounded-lg border-gray-200'>
                            <InputField type='text' placeholder='enter a email..'/>
                        </Input>
                    </View>
                    <View className='mb-4'>
                        <FormControlLabel>
                            <FormControlLabelText>Gender</FormControlLabelText>
                        </FormControlLabel>
                        <Select className='bg-white rounded-lg' >
                            <SelectTrigger variant="outline" size="md" className='rounded-lg border-gray-200 '>
                                <SelectInput placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectPortal>
                                <SelectBackdrop />
                                <SelectContent>
                                <SelectDragIndicatorWrapper>
                                    <SelectDragIndicator />
                                </SelectDragIndicatorWrapper>
                                <SelectItem label="Men" value="l" />
                                <SelectItem label="Woman" value="p" />
                                </SelectContent>
                            </SelectPortal>
                        </Select>
                    </View>
                    <View className='mb-4'>
                        <FormControlLabel>
                            <FormControlLabelText>Department</FormControlLabelText>
                        </FormControlLabel>
                        <Select className='bg-white rounded-lg' >
                            <SelectTrigger variant="outline" size="md" className='rounded-lg border-gray-200 '>
                                <SelectInput placeholder="Select department" />
                            </SelectTrigger>
                            <SelectPortal>
                                <SelectBackdrop />
                                <SelectContent>
                                <SelectDragIndicatorWrapper>
                                    <SelectDragIndicator />
                                </SelectDragIndicatorWrapper>
                                <SelectItem label="UX Research" value="ux" />
                                <SelectItem label="Web Development" value="web" />
                                <SelectItem
                                    label="Cross Platform Development Process"
                                    value="Cross Platform Development Process"
                                />
                                <SelectItem label="UI Designing" value="ui" isDisabled={true} />
                                <SelectItem label="Backend Development" value="backend" />
                                </SelectContent>
                            </SelectPortal>
                        </Select>
                    </View>
                    <View className='mb-4'>
                        <FormControlLabel>
                            <FormControlLabelText>Image Url</FormControlLabelText>
                        </FormControlLabel>
                        <Input className='bg-white rounded-lg border-gray-200'>
                            <InputField type='text' placeholder='enter a image url..'/>
                        </Input>
                    </View>
                    <View className='flex flex-row items-start gap-2'>
                        <Button size="md" variant="solid" action="negative" className='rounded-lg'>
                            <ButtonText>Go Back</ButtonText>
                        </Button>
                        <Button size="md" variant="solid" action="primary" className='rounded-lg'>
                            <ButtonText>Save Data</ButtonText>
                        </Button>
                    </View>
                </FormControl>
                </View>
            </Card>

        </AppLayout>
    )
}